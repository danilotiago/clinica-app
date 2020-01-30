import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormUserComponent } from './form-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule
  ],
  exports: [FormUserComponent]
})
export class FormUserModule { }
