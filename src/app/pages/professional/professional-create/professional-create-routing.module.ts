import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalCreatePage } from './professional-create.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalCreatePageRoutingModule {}
