import { Component, OnInit, Input } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  @Input() windowName: string = 'FireLight';

  constructor(private electron: ElectronService ) { }

  ngOnInit() {
  }

  minimizeWindow(){
    this.electron.window.minimize();
  }

  closeWindow(){
    this.electron.window.close();
  }

}
