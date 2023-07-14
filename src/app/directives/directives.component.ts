import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public myswitch = "abc";
  public navlinks = ["Home", "Services", "About Us", "Contact Us"]
  public name = "Srikanth Yaswada";
  public sample = true;


  constructor() { }

  ngOnInit(): void {
  }

}
