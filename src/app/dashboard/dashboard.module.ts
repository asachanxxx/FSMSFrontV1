import { NgModule } from '@angular/core';
import { FullviewComponent } from './fullview/fullview.component'
import { DashBoardRoutingModule } from './dashboard.module.routing';

@NgModule({
  imports: [
    DashBoardRoutingModule,
    
  ],
  declarations: [ 
    FullviewComponent, 
  ]
})
export class DashBoardModule { }
