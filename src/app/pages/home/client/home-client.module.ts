import { HeaderModule } from './../../../shared/header/header.module';
import { RememberAlertModule } from './../../../shared/remember-alert/remember-alert.module';
import { ServicesListModule } from './../../../shared/services-list/services-list.module';
import { SubHeaderModule } from 'src/app/shared/sub-header/sub-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomeClientPage } from './home-client.page';
import { HomeClientRoutingModule } from './home-client.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClientRoutingModule,
    HeaderModule,
    SubHeaderModule,
    ServicesListModule,
    RememberAlertModule
  ],
  declarations: [HomeClientPage]
})
export class HomeClientModule {}
