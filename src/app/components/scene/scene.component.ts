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

  private areaInfo;

  private sceneID: String;
  private scene: Scene;

  constructor(public bridge: BridgeService,
              public scenesService: ScenesService) {

    this.areaInfo = {};
    this.scene = {};
    this.sceneID = 'Tester';
  }

  ngOnInit() {
    setTimeout(async () => {
      this.areaInfo = await this.bridge.getAreaInfo(11);
      this.scene = await this.scenesService.getScene(this.bridge.host, this.bridge.currentArea, 'Tester');
      console.log(this.scene);
      console.log(this.areaInfo);
    }, 5000);
  }

}
