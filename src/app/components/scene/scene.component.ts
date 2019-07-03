import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../../providers/bridge.service';
import { ScenesService } from '../../providers/scenes.service';

import { Scene } from '../../models/scene.model';

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  private areaInfo;

  private sceneID: String;
  private scene: Scene;

  constructor(public bridge: BridgeService,
              public scenesService: ScenesService) {

    this.areaInfo = {};
    this.sceneID = 'Tester';
  }

  ngOnInit() {
    setTimeout(async () => {
      this.areaInfo = await this.bridge.getAreaInfo(11);
      this.scene = await this.scenesService.getScene(this.bridge.host, this.bridge.currentArea, 'Tester');
      console.log(this.scene);
    }, 5000);
  }

}
