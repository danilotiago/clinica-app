import { SubHeaderComponent } from './sub-header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [SubHeaderComponent],
    exports: [SubHeaderComponent]
})
export class SubHeaderModule { }