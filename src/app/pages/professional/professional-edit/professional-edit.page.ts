import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professional } from 'src/app/shared/models/Professional.model';
import { ProfessionalService } from 'src/app/shared/services/professional.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professional-edit',
  templateUrl: './professional-edit.page.html',
  styleUrls: ['./professional-edit.page.scss'],
})
export class ProfessionalEditPage implements OnInit {

  professionalForm: FormGroup;
  professional: Professional;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProfessionalService,
    private toastr: ToastController,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.professional = this.activatedRoute.snapshot.data.professional;
    this.editForm();
  }

  private editForm() {
    this.professionalForm = this.formBuilder.group({ });
  }

  edit(editProfessional: Professional) {
    editProfessional.id    = this.professional.id;

    this.service.edit(editProfessional.id, editProfessional)
      .subscribe(async () => {
        const alert = await this.toastr.create({
          message: 'Profissional editado!',
          duration: 4000,
          position: 'bottom',
          color: 'clinica-primary'
        });
        alert.present();

        this.router.navigate(['/professionals']);

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
