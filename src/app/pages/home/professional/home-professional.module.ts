import { HeaderModule } from './../../../shared/header/header.module';
import { TimelineModule } from './../../../shared/timeline/timeline.module';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    SubHeaderModule,
    HomeProfessionalRoutingModule,
    ServicesListModule,
    RememberAlertModule,
    TitleContentModule,
    ServicesListModule,
    TimelineModule 
  ],
  declarations: [HomeProfessionalPage],
  exports: [HomeProfessionalPage]
})
export class HomeProfessionalModule { }
