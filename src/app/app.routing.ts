import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { FullviewComponent } from './dashboard/fullview/fullview.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.gaurd';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/fullview',
    pathMatch: 'full'
   
  },
  {
    path: 'login',
    component: LoginComponent
    
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'masterdata',
        loadChildren: './masterdata/masterdata.module#MasterDataModule'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashBoardModule'
      }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
