import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../../providers/bridge.service';

@Component({
  selector: 'scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  private areaInfo;

  constructor(public bridge: BridgeService) {
    // lightsList = this.bridge.entertainmentAreas(7);
    this.areaInfo = 0;
  }

  ngOnInit() {
   setTimeout(() => this.areaInfo = this.bridge.getAreaInfo(11), 5000);
  }

}
