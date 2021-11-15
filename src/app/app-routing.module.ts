import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component'; 
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { AmountListComponent } from './components/amount/amount-list/amount-list.component';
import { AddAmountComponent } from './components/amount/add-amount/add-amount.component'; 
import { UsersComponent } from './components/users/users.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

const routes: Routes = [
  { path : '', component: DashboardComponent},
  { path : 'employee-list', component: EmployeeListComponent},
  { path : 'add-employee', component: AddEmployeeComponent},

  { path : 'amount-list', component: AmountListComponent},
  { path : 'add-amount', component: AddAmountComponent},

  { path: 'user', component: UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

})
export class AppRoutingModule { }
