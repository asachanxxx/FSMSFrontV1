import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsRoutingModule } from './masterdata/masterdata.routing';
import { MasterDataModule } from './masterdata/masterdata.module';
import { DashBoardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.gaurd';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsRoutingModule,
    MasterDataModule,
    DashBoardModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    LoginComponent,
  ],
 
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
