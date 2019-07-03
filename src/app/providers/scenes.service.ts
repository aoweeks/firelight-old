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
    this.addScene('192.168.1.1', 8, [1, 5, 8 , 9], 'Tester');
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

    console.log('got to here');
    const newScene = new Scene( [1, 5, 9, 8]);

    this.sceneList[bridgeIP] = {};
    this.sceneList[bridgeIP][areaID] = {};
    this.sceneList[bridgeIP][areaID][sceneName] = newScene;

    console.log(this.sceneList);
    console.log(this.sceneList[bridgeIP]);
  }

  public updateScene() {

  }

}
