import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//http://localhost:8080/student/health
const listurl = 'http://localhost:8080/student/listOfEmployee';
const save='http://localhost:8080/student/saveEmployee';
const findByName='http://localhost:8080/student/findByEmployee';
const baseUrlDelete='http://localhost:8080/student/deleteEmployee';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(listurl);
  }

  get(id): Observable<any> {
    return this.http.get(`${listurl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(save, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${listurl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrlDelete}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrlDelete);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${findByName}?name=${title}`);
  }
}
