import { Component, OnInit } from '@angular/core';

import { BridgeService } from '../../providers/bridge.service';
import { ScenesService } from '../../providers/scenes.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    public bridge: BridgeService,
    public scenes: ScenesService
    ) { }

  ngOnInit() {
  }

  changeArea(event) {
    this.bridge.currentArea = event.id;
    const sceneList = this.scenes.getScenesForArea(this.bridge.host, this.bridge.currentArea);
    this.bridge.currentSceneName = sceneList[0];
    this.scenes.updateCurrentScene(this.bridge.host, this.bridge.currentArea, this.bridge.currentSceneName);
  }

  saveClick(){

    // TEMP, replace with if current scene info != saved scene info
    if (true) {
      //save stuff
    }
  }

}
