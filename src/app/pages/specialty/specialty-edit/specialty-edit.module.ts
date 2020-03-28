import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialtyEditPageRoutingModule } from './specialty-edit-routing.module';

import { SpecialtyEditPage } from './specialty-edit.page';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { FormSpecialtyModule } from 'src/app/shared/forms/specialty/form-specialty.module';
import { TitleContentModule } from 'src/app/shared/title-content/title-content.module';
import { SubHeaderModule } from 'src/app/shared/sub-header/sub-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialtyEditPageRoutingModule,
    HeaderModule,
    SubHeaderModule,
    FormSpecialtyModule,
    TitleContentModule
  ],
  declarations: [SpecialtyEditPage]
})
export class SpecialtyEditPageModule {}
