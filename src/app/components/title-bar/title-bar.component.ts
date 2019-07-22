import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  @Input() windowName: string = 'FireLight';

  constructor() { }

  ngOnInit() {
  }

  minimizeWindow(){
    console.log('Minimize window');
  }

  closeWindow(){
    console.log('Close window');
  }

}
