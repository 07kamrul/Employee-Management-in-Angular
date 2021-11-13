import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AmountService } from '../../services/amounts/amount.service';

@Component({
  selector: 'app-amount-list',
  templateUrl: './amount-list.component.html',
  styleUrls: ['./amount-list.component.css']
})
export class AmountListComponent implements OnInit {

  allUsers: any = [];

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: any = DataTableDirective;
  min: any = 0;
  max: any = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: AmountService) { }

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
    this.service
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
}
