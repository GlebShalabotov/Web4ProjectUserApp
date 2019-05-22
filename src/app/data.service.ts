import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './person';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  }
  link: string;
  ob: Observable<string>;
  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
      return this.http.get<Person[]>('http://localhost:8080/Controller?action=Angular');
  }

  postData(id: string, status: string): void {
    this.link = 'http://localhost:8080/Controller?action=PostAngular&id=' + id + '&status=' + status;
    this.http.post(this.link, '', this.httpOptions).subscribe((res) => {
      console.log(res);
    });
  }

}
