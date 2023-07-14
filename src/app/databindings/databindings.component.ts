import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindings',
  templateUrl: './databindings.component.html',
  styleUrls: ['./databindings.component.css']
})
export class DatabindingsComponent implements OnInit {
  public data = "";
  public employee = {
    name: "Srikanth",
    mobile: 9505294218,
    email: "sreekanthyashwada@gmail.com"
  }

  public value1 = true;
  public value2 = false;


  public myClass1 = "text1"
  public myClass2 = "text2"

  public mycolor = "red";
  public mytext = "'center'"






  constructor() { }

  ngOnInit(): void {
  }

}
