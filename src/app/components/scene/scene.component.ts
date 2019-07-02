import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../../providers/bridge.service';
import { ScenesService } from '../../providers/scenes.service';

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  private areaInfo;
  //private scene: Scene;

  constructor(public bridge: BridgeService,
              public scenesService: ScenesService) {

    this.areaInfo = {};
  }

  ngOnInit() {
    setTimeout(() => {
      this.areaInfo = this.bridge.getAreaInfo(11);

    }, 5000);
  }

}
