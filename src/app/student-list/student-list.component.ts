import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: any = [

  ];
  constructor(private _slService: StudentService) { }

  ngOnInit(): any {
    this._slService.getStudents()
      .subscribe(data => this.students = data)
  }

}
