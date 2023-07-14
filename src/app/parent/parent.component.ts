import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public parentData = "This is From Parent Component";
  public msg: any;
  $event: any;
  constructor() { }

  ngOnInit(): void {
  }

}
