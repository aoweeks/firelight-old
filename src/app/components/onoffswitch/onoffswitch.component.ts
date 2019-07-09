import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'on-off-switch',
  templateUrl: './onoffswitch.component.html',
  styleUrls: ['./onoffswitch.component.scss']
})
export class OnoffswitchComponent implements OnInit {

  private on: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.on = !this.on;
    console.log(this.on);
  }
}
