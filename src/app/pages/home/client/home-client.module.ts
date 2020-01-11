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
    HomeClientRoutingModule
  ],
  declarations: [HomeClientPage]
})
export class HomeClientModule {}
