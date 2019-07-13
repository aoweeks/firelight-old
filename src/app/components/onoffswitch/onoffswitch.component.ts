import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'on-off-switch',
  templateUrl: './onoffswitch.component.html',
  styleUrls: ['./onoffswitch.component.scss']
})
export class OnoffswitchComponent implements OnInit {

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  
  @Input()  private on: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.toggle.emit(!this.on);
  }
}
