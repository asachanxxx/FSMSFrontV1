import { NgModule } from '@angular/core';
import {SuppliermasterComponent} from './suppliermaster/suppliermaster.component';
import {ComponentsRoutingModule} from './masterdata.routing';
import { CustomerComponent } from './customer/customer.component'
import { FormsModule }        from '@angular/forms';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    FormsModule
    
  ],
  declarations: [ 
    SuppliermasterComponent, 
    CustomerComponent 
  ]
})
export class MasterDataModule { }
