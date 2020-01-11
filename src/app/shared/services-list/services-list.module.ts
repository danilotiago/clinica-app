import { ServicesListComponent } from './services-list.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ServicesListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ServicesListComponent]
})
export class ServicesListModule { }
