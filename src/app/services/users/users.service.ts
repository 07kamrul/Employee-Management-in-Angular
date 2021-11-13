import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // users() : Observable<any> {
  //   return this.http.get<Observable<any>>('https://jsonplaceholder.typicode.com/users');
  // }


  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
