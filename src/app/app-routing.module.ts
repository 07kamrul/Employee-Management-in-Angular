import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path : '', component: DashboardComponent},
  { path : 'employee-list', component: EmployeeListComponent},
  { path : 'add-employee', component: AddEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
