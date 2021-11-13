import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataTablesModule } from "angular-datatables";
import { AmountListComponent } from './amount/amount-list/amount-list.component';
import { AddAmountComponent } from './amount/add-amount/add-amount.component';
import { UsersComponent } from './components/users/users.component';

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

  providers: [],

  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
