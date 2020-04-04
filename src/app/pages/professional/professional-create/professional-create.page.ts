import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputStringValidator } from 'src/app/shared/forms/validators/input-string/input-string-validator';
import { Professional } from 'src/app/shared/models/Professional.model';
import { ProfessionalService } from 'src/app/shared/services/professional.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-create',
  templateUrl: './professional-create.page.html',
  styleUrls: ['./professional-create.page.scss'],
})
export class ProfessionalCreatePage implements OnInit {

  professionalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProfessionalService,
    private toastr: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.professionalForm = this.formBuilder.group({
      name: ['',
        [
          InputStringValidator.startsWithBlanks,
          InputStringValidator.minLengthIgnoringBlanks(3),
          InputStringValidator.maxLengthIgnoringBlanks(50)
        ]
      ],
      image: [''],
      description: ['',
        [
          InputStringValidator.maxLengthIgnoringBlanks(50)
        ]
      ]
    });
  }

  register(newProfessional: Professional) {

    this.service.save(newProfessional)
      .subscribe(async () => {
        const alert = await this.toastr.create({
          message: 'Profissional cadastrado!',
          duration: 4000,
          position: 'bottom',
          color: 'clinica-primary'
        });
        alert.present();

        this.router.navigate(['/profissionals']);

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
