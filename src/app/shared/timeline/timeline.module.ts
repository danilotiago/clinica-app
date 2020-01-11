import { TimelineComponent } from './timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { }
