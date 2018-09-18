import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-counter',
  templateUrl: './demo-counter.component.html',
  styleUrls: ['./demo-counter.component.css']
})
export class DemoCounterComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  onIncrClick() {
    this.count++;
  }

  onDecrClick() {
    this.count--;
  }

}
