import { UserService } from './../../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InputStringValidator } from 'src/app/shared/forms/validators/input-string/input-string-validator';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/auth/auth/auth.service';
import { RedirectAfterLoginService } from 'src/app/shared/services/redirect-after-login.service';
import { ToastController } from '@ionic/angular';
import { EmailUsedValidatorAsync } from 'src/app/shared/forms/validators/input-string/email-used-validator-async';

@Component({
    selector: 'clinica-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private authService: AuthService,
        private redirectAfterLoginService: RedirectAfterLoginService,
        private emailUsedValidatorAsync: EmailUsedValidatorAsync,
        private toastr: ToastController
    ) { }

    ngOnInit() {
        this.createForm();
    }

    private createForm() {
        this.registerForm = this.formBuilder.group({
            name: ['',
                [
                    InputStringValidator.startsWithBlanks,
                    InputStringValidator.minLengthIgnoringBlanks(3),
                    InputStringValidator.maxLengthIgnoringBlanks(50)
                ]
            ],
            birthDate: ['',
                Validators.required
            ],
            telephone: [''],
            cellphone: ['',
                [
                    Validators.required,
                    Validators.minLength(15)
                ]
            ],
            canWhatsappContact: [true,
                Validators.required
            ],
            email: ['', [
                    Validators.required,
                    Validators.email
                ],
                this.emailUsedValidatorAsync.checkEmailInUse()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(15)
                ]    
            ],
            cep: ['',
                [
                    Validators.required,
                    Validators.minLength(9)
                ]
            ],
            street: ['',
                Validators.required
            ],
            number: ['',
                Validators.required
            ],
            complement: [''],
            neighborhood: ['',
                Validators.required
            ],
            city: ['',
                Validators.required
            ],
            state: ['',
                Validators.required
            ]
        });
    }

    register(newUser: User) {
        this.userService
            .save(newUser)
            .subscribe(resp => {
                this.authService
                    .authenticate(newUser.email, newUser.password)
                    .subscribe(resp => this.redirectAfterLoginService.navigateAfterLogin());
            }, async err => {
                if (err.status === 400) {
                    const alert = await this.toastr.create({
                        message: 'Ops! Erro de integridade referencial.',
                        duration: 4000,
                        position: 'bottom',
                        color: 'clinica-secondary'
                    });
                    alert.present();
                } else {
                    console.log(err);

                    const alert = await this.toastr.create({
                        message: 'Desculpe! Estamos com problemas internos, mas nossa equipe já está trabalhando para resolver.',
                        duration: 4000,
                        position: 'bottom',
                    });
                    alert.present();
                }
            });
    }

}
