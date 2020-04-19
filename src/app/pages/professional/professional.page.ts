import { Component, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Professional } from 'src/app/shared/models/Professional.model';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProfessionalService } from 'src/app/shared/services/professional.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.page.html',
  styleUrls: ['./professional.page.scss'],
})
export class ProfessionalPage implements OnInit {

  constructor(
    private service: ProfessionalService,
    private route: ActivatedRoute,
    public actionSheet: ActionSheetController,
    private toastr: ToastController,
    public alert: AlertController,
    private router: Router) { }

  professionals: Professional[] = [];

  ngOnInit() {
    this.route.data.subscribe(param => {
      this.professionals = param['professionals'];
    });
  }

  async clicked(professional: Professional) {
    
    const actionSheet = await this.actionSheet.create({
      header: 'Profissionais',
      buttons: [
        {
          text: 'Editar',
          icon: 'create',
          handler: () => { this.router.navigate(['/professionals', 'edit', professional.id]); }
        },
        {
          text: 'Remover',
          icon: 'trash',
          handler: () => { this.confirmDelete(professional) }
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

  async confirmDelete(professional: Professional) {
    const alert = await this.alert.create({
      header: `Remover o perfil de profissional`,
      subHeader: `Deseja remover ${professional.user.name} ?`,
      message: 'O perfil será removido, porém o cadastro de cliente ainda estará liberado.',
      buttons: [
        {
          text: 'Sim, remover',
          handler: () => { this.remove(professional); }
        }, {
          text: 'Cancelar',
          handler: () => { }
        }
      ]
    });
    await alert.present();
  }

  private remove(professional: Professional) {
    this.service.remove(professional)
    .subscribe(async () => {
      const alert = await this.toastr.create({
        message: 'Perfil de profissional removido!',
        duration: 4000,
        position: 'bottom',
        color: 'clinica-primary'
      });
      alert.present();
      
      this.professionals = this.professionals.filter(item => item.id != professional.id);
      
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
