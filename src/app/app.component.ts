import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

import { BridgeService } from './providers/bridge.service';
import { ScenesService } from './providers/scenes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public electronService: ElectronService,
    public bridge: BridgeService,
    public scenes: ScenesService,
    private translate: TranslateService) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }

    console.log(
      Object.keys(this.scenes.sceneList[this.bridge.host][this.bridge.currentArea])
    );
  }

  openBridgeWindow() {
    console.log('Clicked!');
  }


  changeArea() {
    this.scenes.updateCurrentScene(this.bridge.host, this.bridge.currentArea, this.bridge.currentSceneName);
    const sceneList = this.scenes.getScenesForArea(this.bridge.host, this.bridge.currentArea);
    console.log(sceneList);
    // this.bridge.currentSceneName = sceneList[0];
  }
}
