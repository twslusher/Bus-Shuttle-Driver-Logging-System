import { Component, OnInit } from '@angular/core';
import { Stop } from '../stop';
import { STOPS } from '../mock-stops';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {
  
  stops = STOPS;
  
  selectedStop: Stop;
    
  
  constructor() { }

  ngOnInit() {
  }

onSelect(stop: Stop): void {
      this.selectedStop = stop;
    }

}
