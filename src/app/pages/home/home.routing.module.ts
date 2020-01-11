import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'client',
        loadChildren: () => import('./client/home-client.module').then(m => m.HomeClientModule)
    },
    {
        path: 'professional',
        loadChildren: () => import('./professional/home-professional.module').then(m => m.HomeProfessionalModule)
    },
    {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
      exports: [RouterModule]
})
export class HomeRoutingModule { }