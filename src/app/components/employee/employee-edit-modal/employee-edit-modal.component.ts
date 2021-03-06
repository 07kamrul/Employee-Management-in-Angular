import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employees } from 'src/app/models/employees';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {


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

    this.getEmployeeFormControl['employeeId'].setValue(this.employee.id);
    this.getEmployeeFormControl['employeeUsername'].setValue(this.employee.username);
    this.getEmployeeFormControl['employeeEmail'].setValue(this.employee.email);
    this.getEmployeeFormControl['employeeName'].setValue(this.employee.name);
    this.getEmployeeFormControl['employeeMobile'].setValue(this.employee.phone);
    this.getEmployeeFormControl['employeeAddress'].setValue(addressInfo);
    this.getEmployeeFormControl['employeeCompany'].setValue(companyInfo);
  }

  update(user: Employees){
    // call update service
    //

    this.employeeServices.update(user.id, user);


  }

  updateModal(formData: any){

    console.log(JSON.stringify(formData.value));
    let updateEmployee: Employees = new Employees();

    updateEmployee.id = this.getEmployeeFormControl['employeeId'].value;
    updateEmployee.username = this.getEmployeeFormControl['employeeUsername'].value;
    updateEmployee.email = this.getEmployeeFormControl['employeeEmail'].value;
    updateEmployee.name = this.getEmployeeFormControl['employeeName'].value;
    updateEmployee.phone = this.getEmployeeFormControl['employeeMobile'].value;
    updateEmployee.address = this.getEmployeeFormControl['employeeAddress'].value;
    updateEmployee.company = this.getEmployeeFormControl['employeeCompany'].value;

    this.employeeServices.update(updateEmployee.id, updateEmployee);

    this.activeModal.close();
  }

  closeModal(){
    this.activeModal.close();
  }

  printvalue(){
    console.log("User Id "+ this.getEmployeeFormControl['employeeId'].value);
  }
}
