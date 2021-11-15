import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const basedUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})


export class EmployeesService {


  constructor(private http: HttpClient) { }

  // users() : Observable<any> {
  //   return this.http.get<Observable<any>>('https://jsonplaceholder.typicode.com/users');
  // }


  users() {
    return this.http.get(basedUrl);
  }

  getAll(): Observable<any> {
    return this.http.get(basedUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${basedUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(basedUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${basedUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${basedUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(basedUrl);
  }

  findByUsername(username: any): Observable<any> {
    return this.http.get(`${basedUrl}?username=${username}`);
  }
}
