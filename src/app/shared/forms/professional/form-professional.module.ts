import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormProfessionalComponent } from './form-professional.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  declarations: [FormProfessionalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule
  ],
  exports: [FormProfessionalComponent]
})
export class FormProfessionalModule { }
