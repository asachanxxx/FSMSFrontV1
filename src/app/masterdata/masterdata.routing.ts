import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer/customer.component'; 
import { SuppliermasterComponent } from './suppliermaster/suppliermaster.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'MasterData'
    },
    children: [
      {
        path: 'supplier',
        component: SuppliermasterComponent,
        data: {
          title: 'Supplier'
        }
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: 'Customers'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
