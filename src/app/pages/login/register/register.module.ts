import { FormUserModule } from './../../../shared/forms/user/form-user.module';
import { TitleContentModule } from './../../../shared/title-content/title-content.module';
import { SubHeaderModule } from './../../../shared/sub-header/sub-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule,
    SubHeaderModule,
    FormUserModule,
    TitleContentModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
