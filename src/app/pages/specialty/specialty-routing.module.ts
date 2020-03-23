import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialtyPage } from './specialty.page';
import { SpecialtiesResolver } from 'src/app/shared/resolvers/specialties.resolver';

const routes: Routes = [
  {
    path: '',
    component: SpecialtyPage,
    resolve: { specialties: SpecialtiesResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    SpecialtiesResolver
  ]
})
export class SpecialtyPageRoutingModule {}
