import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputStringValidator } from 'src/app/shared/forms/validators/input-string/input-string-validator';
import { Specialty } from 'src/app/shared/models/Specialty.model';
import { SpecialtyService } from 'src/app/shared/services/specialty.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialty-edit',
  templateUrl: './specialty-edit.page.html',
  styleUrls: ['./specialty-edit.page.scss'],
})
export class SpecialtyEditPage implements OnInit {

  specialtyForm: FormGroup;
  specialty: Specialty;

  constructor(
    private formBuilder: FormBuilder,
    private service: SpecialtyService,
    private toastr: ToastController,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.specialty = this.activatedRoute.snapshot.data.specialty;
    this.editForm();
  }

  private editForm() {
    this.specialtyForm = this.formBuilder.group({
      name: [this.specialty.name,
        [
          InputStringValidator.startsWithBlanks,
          InputStringValidator.minLengthIgnoringBlanks(3),
          InputStringValidator.maxLengthIgnoringBlanks(50)
        ]
      ],
      image: [this.renderImageToShow(this.specialty.image)],
      description: [this.specialty.description,
        [
          InputStringValidator.maxLengthIgnoringBlanks(50)
        ]
      ],
      procedures: [this.specialty.procedures]
    });
  }

  private renderImageToShow(image: string): any {
    const splited: string[] = image.split("/");
    return splited[splited.length-1].split(".")[0];
  }

  edit(editSpecialty: Specialty) {
    editSpecialty.image = this.setImage(editSpecialty.image);
    editSpecialty.id    = this.specialty.id;

    this.service.edit(editSpecialty.id, editSpecialty)
      .subscribe(async () => {
        const alert = await this.toastr.create({
          message: 'Serviço editado!',
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
