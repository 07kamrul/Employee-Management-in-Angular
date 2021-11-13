import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  constructor(private http: HttpClient) { }

  // users() : Observable<any> {
  //   return this.http.get<Observable<any>>('https://jsonplaceholder.typicode.com/users');
  // }


  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
