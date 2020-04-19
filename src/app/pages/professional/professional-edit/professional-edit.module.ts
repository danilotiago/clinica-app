import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalEditPageRoutingModule } from './professional-edit-routing.module';

import { ProfessionalEditPage } from './professional-edit.page';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { FormProfessionalModule } from 'src/app/shared/forms/professional/form-professional.module';
import { TitleContentModule } from 'src/app/shared/title-content/title-content.module';
import { SubHeaderModule } from 'src/app/shared/sub-header/sub-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalEditPageRoutingModule,
    HeaderModule,
    SubHeaderModule,
    FormProfessionalModule,
    TitleContentModule
  ],
  declarations: [ProfessionalEditPage]
})
export class ProfessionalEditPageModule {}
