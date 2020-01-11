import { HomeProfessionalRoutingModule } from './home-professional.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeProfessionalPage } from './home-professional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfessionalRoutingModule
  ],
  declarations: [HomeProfessionalPage],
  exports: [HomeProfessionalPage]
})
export class HomeProfessionalModule { }
