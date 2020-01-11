import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/login/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'forgotpass',
        loadChildren: () => import('./pages/login/forgotpass/forgotpass.module').then(m => m.ForgotpassPageModule)
    },
    {
        path: 'sigin',
        loadChildren: () => import('./pages/login/sigin/sigin.module').then(m => m.SiginPageModule)
    }




];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
