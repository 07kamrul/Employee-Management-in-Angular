import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component'; 
import { AddEmployeeComponent } from './components/add-employee/add-employee.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { AmountListComponent } from './components/amount-list/amount-list.component';
import { AddAmountComponent } from './components/add-amount/add-amount.component'; 
import { UsersComponent } from './components/users/users.component';

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
  exports: [RouterModule]
})
export class AppRoutingModule { }
