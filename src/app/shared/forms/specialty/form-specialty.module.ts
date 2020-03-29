import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormSpecialtyComponent } from './form-specialty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  declarations: [FormSpecialtyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule
  ],
  exports: [FormSpecialtyComponent]
})
export class FormSpecialtyModule { }