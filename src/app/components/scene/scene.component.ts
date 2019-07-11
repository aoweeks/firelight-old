import { Component, OnInit, Input } from '@angular/core';
import { BridgeService } from '../../providers/bridge.service';
import { ScenesService } from '../../providers/scenes.service';

import { Scene } from '../../models/scene.model';


@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @Input()
  bridgeIP;

  @Input()
  areaID;

  @Input()
  sceneName;

  private areaInfo;
  private scene: Scene;

  constructor(public bridge: BridgeService,
              public scenesService: ScenesService) {

    this.areaInfo = {};
    this.scene = {};
  }

  ngOnInit() {
    // setTimeout( () => {
    //   this.areaInfo = this.bridge.getAreaInfo(this.areaID);
    //   this.scene = this.scenesService.getScene(this.bridge.host, this.bridge.currentArea, this.sceneName);
    //   console.log(this.scene);
    //   console.log(this.areaInfo);
    // }, 3000);
  }

  // updateScene() {
  //   this.areaInfo = this.bridge.getAreaInfo(this.areaID);
  //   this.scene = this.scenesService.getScene(this.bridge.host, this.bridge.currentArea, this.sceneName);
  // }

  // getLight(lightID: number) {
  //     return this.scenesService.currentScene[lightID];
  // }
}
