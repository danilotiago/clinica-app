import { AuthUserService } from '../../../shared/services/auth-user.service';
import { AuthService } from './../../../auth/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RedirectAfterLoginService } from 'src/app/shared/services/redirect-after-login.service';


@Component({
    selector: 'clinica-sigin',
    templateUrl: './sigin.page.html',
    styleUrls: ['./sigin.page.scss'],
})
export class SiginPage implements OnInit {

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private redirectAfterLoginService: RedirectAfterLoginService,
        private toastr: ToastController
    ) { }

    ngOnInit() {
        this.createForm();
    }

    login() {
        const email: string = this.loginForm.get('email').value;
        const password: string = this.loginForm.get('password').value;
        this.authService.authenticate(email, password)
            .subscribe(() => {
                this.redirectAfterLoginService.navigateAfterLogin();
            },
                async err => {
                    if (err.status === 403) {
                        const alert = await this.toastr.create({
                            message: 'Ops! Cadastro não encontrado, mas você pode tentar novamente.',
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

    private createForm() {
        this.loginForm = this.formBuilder.group({
            email: ['',
                Validators.required
            ],
            password: ['',
                Validators.required
            ]
        });
    }
}
