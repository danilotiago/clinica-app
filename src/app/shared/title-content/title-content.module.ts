import { IonicModule } from '@ionic/angular';
import { TitleContentComponent } from './title-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TitleContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TitleContentComponent]
})
export class TitleContentModule { }
