import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalPage } from './professional.page';
import { SpecialtiesResolver } from 'src/app/shared/resolvers/specialties.resolver';
import { ProfessionalsResolver } from 'src/app/shared/resolvers/professionals.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalPage,
    resolve: { professionals: ProfessionalsResolver }
  },
  {
    path: 'create',
    loadChildren: () => import('./professional-create/professional-create.module').then( m => m.ProfessionalCreatePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./professional-edit/professional-edit.module').then( m => m.ProfessionalEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ProfessionalsResolver
  ]
})
export class ProfessionalPageRoutingModule {}
