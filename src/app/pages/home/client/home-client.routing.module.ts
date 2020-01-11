import { HomeClientPage } from './home-client.page';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: HomeClientPage
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
      exports: [RouterModule]
})
export class HomeClientRoutingModule { }