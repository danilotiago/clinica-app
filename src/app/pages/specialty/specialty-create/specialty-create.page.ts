import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputStringValidator } from 'src/app/shared/forms/validators/input-string/input-string-validator';
import { Specialty } from 'src/app/shared/models/Specialty.model';
import { SpecialtyService } from 'src/app/shared/services/specialty.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialty-create',
  templateUrl: './specialty-create.page.html',
  styleUrls: ['./specialty-create.page.scss'],
})
export class SpecialtyCreatePage implements OnInit {

  specialtyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: SpecialtyService,
    private toastr: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.specialtyForm = this.formBuilder.group({
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

  register(newSpecialty: Specialty) {

    newSpecialty.image = this.setImage(newSpecialty.image);

    this.service.save(newSpecialty)
      .subscribe(async () => {
        const alert = await this.toastr.create({
          message: 'Serviço cadastrado!',
          duration: 4000,
          position: 'bottom',
          color: 'clinica-primary'
        });
        alert.present();

        this.router.navigate(['/specialties']);

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

  private setImage(image: string) {
    const nameImage: string = image || 'generic';
    return `/assets/imgs/${nameImage}.svg`;
  }

}
