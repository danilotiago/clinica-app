import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialtyCreatePage } from './specialty-create.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialtyCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialtyCreatePageRoutingModule {}
