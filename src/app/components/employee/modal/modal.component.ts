import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employees } from 'src/app/models/employees';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { Company } from '../../../models/company';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @Input() employee: Employees;
  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal,
    public datePipe: DatePipe,
    private employeeServices: EmployeesService
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeId: new FormControl(null),
      employeeName: new FormControl(null),
      employeeUsername: new FormControl(null),
      employeeEmail: new FormControl(null),
      employeeMobile: new FormControl(null),
      employeeAddress: new FormControl(null),
      employeeCompany: new FormControl(null)
    },{
      validators:[]
    });
  }

  get getEmployeeFormControl(){
    return this.employeeForm.controls;
  }

  ngAfterViewInit(){

    let address = this.employee.address;
    let company =  this.employee.company;
    let addressInfo = address.city+', '+address.street+', '+address.zipcode;
    let companyInfo = company.bs+', '+company.catchPhrase+', '+company.name;
    console.log(addressInfo);
    console.log(companyInfo);


    this.getEmployeeFormControl['employeeId'].setValue(this.employee.id);
    this.getEmployeeFormControl['employeeUsername'].setValue(this.employee.username);
    this.getEmployeeFormControl['employeeEmail'].setValue(this.employee.email);
    this.getEmployeeFormControl['employeeName'].setValue(this.employee.name);
    this.getEmployeeFormControl['employeeMobile'].setValue(this.employee.phone);
    this.getEmployeeFormControl['employeeAddress'].setValue(addressInfo);
    this.getEmployeeFormControl['employeeCompany'].setValue(companyInfo);
  }

  closeModal(){
    this.activeModal.close();
  }

  printvalue(){
    console.log("User Id "+ this.getEmployeeFormControl['employeeId'].value);
  }
}
