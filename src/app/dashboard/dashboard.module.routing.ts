import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullviewComponent} from './fullview/fullview.component'; 
import { AuthGuard } from '../auth/auth.gaurd';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'FullView'
    },
    children: [
      {
        path: 'fullview',
        component: FullviewComponent, canActivate:[AuthGuard],
        data: {
          title: 'FullView'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule {}
