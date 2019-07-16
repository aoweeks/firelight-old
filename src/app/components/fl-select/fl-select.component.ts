import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'fl-select',
  templateUrl: './fl-select.component.html',
  styleUrls: ['./fl-select.component.scss'],
  animations: [
    trigger('itemState', [
        // transition('void => *', [
          // style({transform: 'translateX(-100%)', opacity: 0}),
          // animate('500ms ease-out')
        // ]),
      transition('* => *', [
        query(':enter', [
          stagger(50, [
            style({transform: 'translateX(-100%)', opacity: 0}),
            animate('300ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
          ])
        ], {optional: true} ),
        query(':leave', [
          stagger(-50, [
            animate('300ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
          ])
        ], {optional: true} )
      ])
    ])
  ]
})
export class FlSelectComponent implements OnInit {

  @Input() text: string;
  @Input() itemList: [];
  @Input() currentItem: string;
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

  getItem(item: any) {
    return typeof(item) === 'string' ? item : item.name;
  }

  selectOption(item) {
    this.selection.emit( item.toString() );
    this.deactivate();
  }
}
