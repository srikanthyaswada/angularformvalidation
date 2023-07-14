import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {


  public courses = ["Html", "Css", "Javascript", "Bootstrap", "Angular"]

  courseError = true;
  public userModel = new User('', '', 'someone@gmail.com', '', '', '', 'default', true);
  constructor() { }

  ngOnInit(): void {
  }
  validateCourse(v: any) {
    if (v === 'default') {
      this.courseError = true;
    }
    else {
      this.courseError = false;
    }
  }
  onSubmit() {
    console.log(this.userModel);
  }
}
