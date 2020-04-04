import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalEditPage } from './professional-edit.page';
import { ProfessionalResolver } from 'src/app/shared/resolvers/professional.resolver';

const routes: Routes = [
  {
    path: ':id',
    resolve: { professional: ProfessionalResolver },
    component: ProfessionalEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ProfessionalResolver
  ]
})
export class ProfessionalEditPageRoutingModule {}
