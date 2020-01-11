import { HomeClientModule } from './client/home-client.module';
import { HomeProfessionalModule } from './professional/home-professional.module';
import { HomeRoutingModule } from './home.routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        HomeRoutingModule,
        HomeProfessionalModule,
        HomeClientModule
    ]
})
export class HomeModule { }