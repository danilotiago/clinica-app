import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulePage } from './schedule.page';
import { SpecialtiesResolver } from 'src/app/shared/resolvers/specialties.resolver';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage,
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
export class ScheduleRoutingModule {}
