import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputStringValidator } from 'src/app/shared/forms/validators/input-string/input-string-validator';
import { Professional } from 'src/app/shared/models/Professional.model';
import { ProfessionalService } from 'src/app/shared/services/professional.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Specialty } from 'src/app/shared/models/Specialty.model';
import { SpecialtyService } from 'src/app/shared/services/specialty.service';

@Component({
  selector: 'app-professional-create',
  templateUrl: './professional-create.page.html',
  styleUrls: ['./professional-create.page.scss'],
})
export class ProfessionalCreatePage implements OnInit {

  professionalForm: FormGroup;

  users: User[]                    = [];
  specialties: Specialty[]         = [];
  specialtiesSelected: Specialty[] = [];

  user: User = null;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProfessionalService,
    private userService: UserService,
    private specialtyService: SpecialtyService,
    private toastr: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();

    this.specialtyService.getAllSpecialties()
      .subscribe(specialties => this.specialties = specialties);
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

  register() {

    const professional: Professional = new Professional();
    professional.user = this.user;
    professional.specialties = this.specialtiesSelected;

    this.service.save(professional)
      .subscribe(async () => {
        const alert = await this.toastr.create({
          message: 'Profissional cadastrado!',
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

  findUsers(like: String) {
    if (!like) {
      this.users = [];
      return;
    }

    if (like.length < 3) return;

    this.userService.getAllUsers(like)
      .subscribe(users => this.users = users);
  }

  selectUser(id: String) {
    this.user = this.users.filter(user => user.id == id)[0];
  }

  hasUserSelected() {
    return this.user ? true : false;
  }

  selectSpecialty(specialty: Specialty) {
     if (this.specialtyAlreadySelected(specialty)) return;

    this.specialtiesSelected.push(specialty);
  }

  cleanAll() {
    this.user = null;
    this.removeSpecialtiesSelected();
  }

  removeSpecialtiesSelected() {
    this.specialtiesSelected = [];
  }
 
  private specialtyAlreadySelected(specialty: Specialty) {
    return this.specialtiesSelected.find(item => item.id == specialty.id);
  }
}
