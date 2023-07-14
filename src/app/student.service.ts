import { studentInterface } from './student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }
  private _url = "../assets/data/student.json";
  getStudents(): Observable<studentInterface[]> {
    return this._http.get<studentInterface[]>(this._url);
  }
}
