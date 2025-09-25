import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'dashboard', 
    loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule) 
   },
   { path: 'reports', 
    loadChildren: () => import('./features/reports/reports-module').then(m => m.ReportsModule) 
   }, 
   { path: 'settings', 
    loadChildren: () => import('./features/settings/settings-module').then(m => m.SettingsModule) 
   },
   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
