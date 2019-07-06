import { Injectable } from '@angular/core';
import { Light } from '../models/light.model';
import { Scene } from '../models/scene.model';
import { SceneList } from '../models/scenelist.model';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  public sceneList: any = new SceneList();
 

  constructor() {
    console.log('running');
    this.addScene('192.168.1.1', 8, [1, 2, 3, 4, 5, 13, 14, 16], 'Tester');
  }

  public getScene(bridgeIP: string,
                  areaID: number,
                  sceneID: string): any {

    return this.sceneList[bridgeIP][areaID]['Tester'];
  }

  public addScene(bridgeIP: string,
                  areaID: number,
                  lightIDs: number[],
                  sceneName: string) {

    const newScene = new Scene( lightIDs );
    newScene[3].type = 'candle'; //temp

    this.sceneList[bridgeIP] = {};
    this.sceneList[bridgeIP][areaID] = {};
    this.sceneList[bridgeIP][areaID][sceneName] = newScene;

    console.log(this.sceneList);
  }

  public updateScene() {

  }

}
