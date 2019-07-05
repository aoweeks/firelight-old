import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'light-type',
  templateUrl: './lighttype.component.html',
  styleUrls: ['./lighttype.component.scss']
})
export class LighttypeComponent implements OnInit {

  @Input()
  light;

  ngOnInit() {
  }

}
