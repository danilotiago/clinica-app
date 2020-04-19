import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialtyEditPage } from './specialty-edit.page';
import { SpecialtyResolver } from 'src/app/shared/resolvers/specialty.resolver';

const routes: Routes = [
  {
    path: ':id',
    resolve: { specialty: SpecialtyResolver },
    component: SpecialtyEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    SpecialtyResolver
  ]
})
export class SpecialtyEditPageRoutingModule {}
