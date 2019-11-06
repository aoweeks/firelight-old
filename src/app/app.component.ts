import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

import { BridgeService } from './providers/bridge.service';
import { ScenesService } from './providers/scenes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('itemState', [
  //     transition('false => true', [
  //       style({transform: 'translateX(-100%)', opacity: 0}),
  //       animate('500ms ease-out')
  //     ]),
  //     transition('true => false', [
  //       style({transform: 'translateX(-100%)', opacity: 0}),
  //       animate('500ms ease-out')
  //     ])
  // ]
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
