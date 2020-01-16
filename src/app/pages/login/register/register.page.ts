import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'clinica-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createForm();
    }

    private createForm() {
        this.registerForm = this.formBuilder.group({
            name: ['',
                Validators.required
            ],
            birthDate: ['',
                Validators.required
            ],
            telephone: ['',
                Validators.required
            ],
            cellphone: ['',
                Validators.required
            ],
            canWhatsappContact: [true,
                Validators.required
            ],
            email: ['',
                Validators.required
            ],
            password: ['',
                Validators.required
            ],
            cep: ['',
                Validators.required
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

    register(formData: object) {
        console.log('formdata, ', formData);
        
    }

}
