import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then(m => m.ForgotpassPageModule)
  },
  {
    path: 'sigin',
    loadChildren: () => import('./sigin/sigin.module').then(m => m.SiginPageModule)
  },
  {
    path: '',
    redirectTo: 'sigin',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
