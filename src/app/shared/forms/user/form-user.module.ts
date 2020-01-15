import { IonicModule } from '@ionic/angular';
import { FormUserComponent } from './form-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxMaskModule.forRoot()
  ],
  exports: [FormUserComponent]
})
export class FormUserModule { }
