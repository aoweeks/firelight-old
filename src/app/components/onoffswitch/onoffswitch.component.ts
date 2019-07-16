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
    this.playAudio(!this.on);
    this.toggle.emit(!this.on);
  }

  playAudio(on: boolean){
    let audio = new Audio();
    audio.src = on ?  "../../assets/audio/switch-on.mp3" :
                      "../../assets/audio/switch-off.mp3";
    audio.load();
    audio.play();
  }
}
