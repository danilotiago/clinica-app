import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialtyPageRoutingModule } from './specialty-routing.module';

import { SpecialtyPage } from './specialty.page';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { SubHeaderModule } from 'src/app/shared/sub-header/sub-header.module';
import { TitleContentModule } from 'src/app/shared/title-content/title-content.module';
import { ServicesListModule } from 'src/app/shared/services-list/services-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialtyPageRoutingModule,
    HeaderModule,
    SubHeaderModule,
    TitleContentModule,
    ServicesListModule
  ],
  declarations: [SpecialtyPage]
})
export class SpecialtyPageModule {}
