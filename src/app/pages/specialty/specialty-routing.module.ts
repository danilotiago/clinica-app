import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialtyPage } from './specialty.page';
import { SpecialtiesResolver } from 'src/app/shared/resolvers/specialties.resolver';

const routes: Routes = [
  {
    path: '',
    component: SpecialtyPage,
    resolve: { specialties: SpecialtiesResolver }
  },
  {
    path: 'create',
    loadChildren: () => import('./specialty-create/specialty-create.module').then( m => m.SpecialtyCreatePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./specialty-edit/specialty-edit.module').then( m => m.SpecialtyEditPageModule)
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
