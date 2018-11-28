import { Component, OnInit } from '@angular/core';
import { Count } from '../count';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {

  count: Count = {
    count: 0
  };


  constructor() { }

  ngOnInit() {
  }

}
