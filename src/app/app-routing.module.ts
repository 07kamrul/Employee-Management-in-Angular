import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AmountListComponent } from './amount/amount-list/amount-list.component';
import { AddAmountComponent } from './amount/add-amount/add-amount.component';
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
