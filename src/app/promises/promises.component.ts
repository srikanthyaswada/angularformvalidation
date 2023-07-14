import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let practice = new Promise(s => {
      console.log("promises is Running.....")
      s("1st value")
    })
    practice.then(v => {
      console.log(v)
    })
    // let practice1 = new Promise(s => {
    //   s("1st value")
    // })
    // practice1.then(v => {
    //   console.log(v)
    // })

    let ob = new Observable(myob => {
      console.log("Obserables is Running....")
      myob.next("first value")
      myob.next("second value")
      myob.next("third value")
    })
    ob.subscribe(v => {
      console.log(v);
    })

  }
}
