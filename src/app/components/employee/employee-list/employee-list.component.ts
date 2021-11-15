import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { EmployeesService } from '../../../services/employees/employees.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Employees } from '../../../models/employees';
import { EmployeeViewModalComponent } from '../employee-view-modal/employee-view-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employees = new Employees();
  currentEmployee = null;

  allUsers: any = [];

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: any = DataTableDirective;

  min: any = 0;
  max: any = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private employeeService: EmployeesService,
    private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    this.users();
    // $.fn.dataTable.ext.search.push((settings: any, data: string[], dataIndex: any) => {
    //   const id = parseFloat(data[0]) || 0; // use data for the id column
    //   return (Number.isNaN(this.min) && Number.isNaN(this.max)) ||
    //       (Number.isNaN(this.min) && id <= this.max) ||
    //       (this.min <= id && Number.isNaN(this.max)) ||
    //       (this.min <= id && id <= this.max);
    // });


    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
    };

  }

  users(): void {
    this.employeeService
        .users()
        .subscribe((response: any) => {
          this.allUsers = response;
          this.dtTrigger.next();
        });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    $.fn.dataTable.ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }


  getEmployeeById(id: any): void{
    this.employeeService.get(id)
    .subscribe(
      data => {
        this.currentEmployee = data;
        console.log(data);

      },
      error => {
        console.log(error);
      });
    }


    viewEmployee(e:any){
      this.employee = e as Employees;
      const modalRef = this.modalService.open(EmployeeViewModalComponent, {
        scrollable: false,
        windowClass: '',
        backdrop: 'static'
      }
      );

      modalRef.componentInstance.employee = this.employee;

      // modalRef.result.then((result: any) => {
      //   console.log(result);
      // }, (reason: any) => {
      //   });
    }


    editEmployee(e:any){
      this.employee = e as Employees;
      const modalRef = this.modalService.open(EmployeeEditModalComponent, {
        scrollable: false,
        windowClass: '',
        backdrop: 'static'
      }
      );

      modalRef.componentInstance.employee = this.employee;

      // modalRef.result.then((result: any) => {
      //   console.log(result);
      // }, (reason: any) => {
      //   });
    }

    deleteEmployee(e:any){
      this.employee = e as Employees;
      const modalRef = this.modalService.open(EmployeeDeleteModalComponent, {
        scrollable: false,
        windowClass: '',
        backdrop: 'static'
      }
      );

      modalRef.componentInstance.employee = this.employee;

      // modalRef.result.then((result: any) => {
      //   console.log(result);
      // }, (reason: any) => {
      //   });
    }
}
