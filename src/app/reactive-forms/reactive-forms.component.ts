import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*"),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    gender: new FormControl("", [
      Validators.required,
    ]),
    pwd: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
    cpwd: new FormControl(""),
  });

  registerSubmited() {
    console.log(this.registerForm.value);
    console.log("Submited");
  }

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }
  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }
  get Pwd(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }
  get Cpwd(): FormControl {
    return this.registerForm.get("Cpwd") as FormControl;
  }
}
