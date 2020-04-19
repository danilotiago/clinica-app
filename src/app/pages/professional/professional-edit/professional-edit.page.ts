import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professional } from 'src/app/shared/models/Professional.model';
import { ProfessionalService } from 'src/app/shared/services/professional.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { SpecialtyService } from 'src/app/shared/services/specialty.service';
import { Specialty } from 'src/app/shared/models/Specialty.model';

@Component({
  selector: 'app-professional-edit',
  templateUrl: './professional-edit.page.html',
  styleUrls: ['./professional-edit.page.scss'],
})
export class ProfessionalEditPage implements OnInit {

  professionalForm: FormGroup;
  professional: Professional;
  user: User;
  specialties: Specialty[];
  specialtiesSelected: Specialty[];

  constructor(
    private service: ProfessionalService,
    private specialtyService: SpecialtyService,
    private toastr: ToastController,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.professional = this.activatedRoute.snapshot.data.professional;
    this.user         = this.professional.user;
    this.specialtiesSelected = this.professional.specialties;

    this.specialtyService.getAllSpecialties()
      .subscribe(specialties => this.specialties = specialties);
  }

  edit() {
    this.professional.specialties = this.specialtiesSelected;
    
    this.service.edit(this.professional.id, this.professional)
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

  selectSpecialty(specialty: Specialty) {
    if (this.specialtyAlreadySelected(specialty)) return;

    this.specialtiesSelected.push(specialty);
  }

  hasUserSelected() {
    return this.user ? true : false;
  }

  removeSpecialtiesSelected() {
    this.specialtiesSelected = [];
  }

  private specialtyAlreadySelected(specialty: Specialty) {
    return this.specialtiesSelected.find(item => item.id == specialty.id);
  }
}
