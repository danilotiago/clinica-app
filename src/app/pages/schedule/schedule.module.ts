import { HeaderModule } from './../../shared/header/header.module';
import { TitleContentModule } from './../../shared/title-content/title-content.module';
import { TimelineModule } from './../../shared/timeline/timeline.module';
import { SubHeaderModule } from './../../shared/sub-header/sub-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleRoutingModule } from './schedule-routing.module';

import { SchedulePage } from './schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ScheduleRoutingModule,
    SubHeaderModule,
    TimelineModule,
    TitleContentModule
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
