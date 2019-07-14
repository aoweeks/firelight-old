import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fl-select',
  templateUrl: './fl-select.component.html',
  styleUrls: ['./fl-select.component.scss']
})
export class FlSelectComponent implements OnInit {

  @Input() text: string;
  @Input() itemList: [];
  @Output() selection: EventEmitter<string> = new EventEmitter();

  private activated: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleActivation() {
    this.activated = !this.activated;
  }

  activate() {
    this.activated = true;
  }

  deactivate() {
    this.activated = false;
  }

  log(base){
    console.log(base);
  }
}
