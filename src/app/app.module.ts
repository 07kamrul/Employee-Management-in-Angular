import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataTablesModule } from "angular-datatables";
import { AmountListComponent } from './components/amount/amount-list/amount-list.component';
import { AddAmountComponent } from './components/amount/add-amount/add-amount.component';
import { UsersComponent } from './components/users/users.component';
import { DatePipe } from '@angular/common';
import { AmountViewModalComponent } from './components/amount/amount-view-modal/amount-view-modal.component';
import { AmountEditModalComponent } from './components/amount/amount-edit-modal/amount-edit-modal.component';
import { AmountDeleteModalComponent } from './components/amount/amount-delete-modal/amount-delete-modal.component';
import { EmployeeViewModalComponent } from './components/employee/employee-view-modal/employee-view-modal.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    DashboardComponent,
    SliderComponent,
    AmountListComponent,
    AddAmountComponent,
    UsersComponent,
    AmountViewModalComponent,
    AmountEditModalComponent,
    AmountDeleteModalComponent,
    EmployeeViewModalComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    DataTablesModule,
    FormsModule,
  ],


  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],

  providers: [
    NgbActiveModal,
    DatePipe
  ],

})
export class AppModule { }
