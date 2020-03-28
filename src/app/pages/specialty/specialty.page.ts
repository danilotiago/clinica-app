import { Component, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';
import { ActivatedRoute } from '@angular/router';
import { Specialty } from 'src/app/shared/models/Specialty.model';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SpecialtyService } from 'src/app/shared/services/specialty.service';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.page.html',
  styleUrls: ['./specialty.page.scss'],
})
export class SpecialtyPage implements OnInit {

  constructor(
    private service: SpecialtyService,
    private route: ActivatedRoute,
    public actionSheet: ActionSheetController,
    private toastr: ToastController,
    public alert: AlertController) { }

  serviceItens: ServiceItem[] = [];

  ngOnInit() {
    this.route.data.subscribe(param => {
      this.renderServiceItensWithSpecialties(param['specialties']);
    });
  }

  /*serviceItens: ServiceItem[] = [
    {
      logo: '/assets/imgs/podology.svg',
      path: '#',
      name: 'Podologia'
    },
    {
      logo: '/assets/imgs/depilation.svg',
      path: '#',
      name: 'Depilação'
    },
    {
      logo: '/assets/imgs/esthetician.svg',
      path: '#',
      name: 'Esteticista'
    },
    {
      logo: '/assets/imgs/massage.svg',
      path: '#',
      name: 'Massoterapia'
    },
    {
      logo: '/assets/imgs/professional.svg',
      path: '#',
      name: 'Nutricionista'
    }
  ]*/

  private renderServiceItensWithSpecialties(specialties: Specialty[]): void {
      this.serviceItens = [];
      specialties.map(specialty => {
        this.serviceItens.push({
          id: specialty.id,
          name: specialty.name,
          path: '#',
          logo: specialty.image
        });
    });
  }

  private remove(specialty: Specialty) {
    this.service.remove(specialty)
    .subscribe(async () => {
      const alert = await this.toastr.create({
        message: 'Serviço removido!',
        duration: 4000,
        position: 'bottom',
        color: 'clinica-primary'
      });
      alert.present();
      
      this.serviceItens = this.serviceItens.filter(item => item.id != specialty.id);
      
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

  async clicked(item: ServiceItem) {
    const specialty: Specialty = (new Specialty).fromObject(item);
    
    const actionSheet = await this.actionSheet.create({
      header: 'Serviços',
      buttons: [
        {
          text: 'Editar',
          icon: 'create',
          handler: () => {
            console.log('editar');
          }
        },
        {
          text: 'Remover',
          icon: 'trash',
          handler: () => { this.confirmDelete(specialty) }
        },  
        {
          text: 'Cancelar',
          icon: 'close',
          handler: () => { }
        }
      ]
    });

    await actionSheet.present();
  }

  async confirmDelete(specialty: Specialty) {
    const alert = await this.alert.create({
      header: `Remover serviço`,
      subHeader: `Deseja remover ${specialty.name} ?`,
      message: 'Caso este serviço esteja vinculado a uma especialidade, esta ação será cancelada.',
      buttons: [
        {
          text: 'Sim, remover',
          handler: () => { this.remove(specialty); }
        }, {
          text: 'Cancelar',
          handler: () => { }
        }
      ]
    });
    await alert.present();
  }
}
