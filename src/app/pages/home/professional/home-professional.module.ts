import { TitleContentModule } from './../../../shared/title-content/title-content.module';
import { RememberAlertModule } from './../../../shared/remember-alert/remember-alert.module';
import { ServicesListModule } from './../../../shared/services-list/services-list.module';
import { HomeProfessionalRoutingModule } from './home-professional.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeProfessionalPage } from './home-professional.page';
import { SubHeaderModule } from 'src/app/shared/sub-header/sub-header.module';
import { TimelineModule } from 'src/app/shared/timeline/timeline.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubHeaderModule,
    HomeProfessionalRoutingModule,
    ServicesListModule,
    RememberAlertModule,
    TitleContentModule,
    ServicesListModule  
  ],
  declarations: [HomeProfessionalPage],
  exports: [HomeProfessionalPage]
})
export class HomeProfessionalModule { }
