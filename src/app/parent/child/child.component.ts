import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() public fromParent: any;

  @Output() public childInfo = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childInfo.emit("this is from child");
  }

}
