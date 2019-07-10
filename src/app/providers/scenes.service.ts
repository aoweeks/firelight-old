import { Injectable } from '@angular/core';
import { Light } from '../models/light.model';
import { Scene } from '../models/scene.model';
import { SceneList } from '../models/scenelist.model';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  public sceneList: any = new SceneList();
  public currentScene: Scene;

  constructor() {
    this.addScene('192.168.1.1', 8, [1, 2, 3, 4, 5, 13, 14, 16], 'Tester');
    this.addScene('192.168.1.1', 8, [1, 2, 3, 4, 5, 13, 14, 16], 'Nexter');
    this.updateCurrentScene('192.168.1.1', 8, 'Tester');
  }

  public getScenesForArea(bridgeIP: string,
                          areaID: number) {

    
    this.initalizeScene(bridgeIP, areaID);
    const listOfScenes = Object.keys(this.sceneList[bridgeIP][areaID]);
    
    if (!listOfScenes.length) {
      this.addScene(bridgeIP, areaID, [1, 2, 3, 4, 5, 13], 'New Scene');
    }

    return listOfScenes;

  }

  public updateCurrentScene(bridgeIP: string,
    areaID: number,
    sceneName: string): any {

    this.currentScene = this.sceneList[bridgeIP][areaID][sceneName];
  }

  public getScene(bridgeIP: string,
                  areaID: number,
                  sceneName: string): any {

    return this.sceneList[bridgeIP][areaID][sceneName];
  }

  public addScene(bridgeIP: string,
                  areaID: number,
                  lightIDs: number[],
                  sceneName: string) {

    const newScene = new Scene( lightIDs );
    newScene[3].type = 'candle'; //temp
    newScene[13].type = 'fire'; //temp

    this.initalizeScene(bridgeIP, areaID);
    this.sceneList[bridgeIP][areaID][sceneName] = newScene;

    console.log(this.sceneList);
  }

  // Initialise to prevent undefined errors, may not be the best way
  // to do this, look at refactoring later
  private initalizeScene( bridgeIP: string,
                          areaID: number) {
    
    if (!this.sceneList[bridgeIP]) { this.sceneList[bridgeIP] = {}; }
    if (!this.sceneList[bridgeIP][areaID]) { this.sceneList[bridgeIP][areaID] = {}; }

  }

}
