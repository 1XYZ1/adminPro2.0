import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMPONENTS
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
          {path: 'progress', component: ProgressComponent, data: {titulo: 'Progres'}},
          {path: 'grafica1', component: Grafica1Component, data: {titulo: 'Grafica #1'}},
          {path: 'account', component: AccountSettingsComponent, data: {titulo: 'Settings'}},
          {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
          {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'}},
        ]
      },


    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}