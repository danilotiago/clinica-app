import { RememberAlertComponent } from './remember-alert.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [RememberAlertComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RememberAlertComponent]
})
export class RememberAlertModule { }
