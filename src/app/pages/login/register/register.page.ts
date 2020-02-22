import { UserService } from './../../../shared/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputStringValidator } from 'src/app/shared/forms/validators/input-string/input-string-validator';
import { User } from 'src/app/shared/models/user.model';

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
        private router: Router // remover pos refact
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
                ]
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
        this.userService.save(newUser)
            .subscribe(resp => this.router.navigate(['/home', 'client']));
    }

}
