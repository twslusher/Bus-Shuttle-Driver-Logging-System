import { Component, OnInit } from '@angular/core';
import { Loop } from "../loop";

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent implements OnInit {

  loop: Loop = {
    id: 1,
    name: 'Red Loop'
  };


  constructor() { }

  ngOnInit() {
  }

}
