import { ProfessionalsListComponent } from './professionals-list.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ProfessionalsListComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [ProfessionalsListComponent]
})
export class ProfessionalsListModule { }
