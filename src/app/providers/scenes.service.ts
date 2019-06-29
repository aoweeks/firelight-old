import { Injectable } from '@angular/core';
import { Light } from '../models/light.model';
import { Scene } from '../models/scene.model';
import { SceneList } from '../models/scenelist.model';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  public sceneList = new SceneList();
  private sceneOne;
  // private sceneList = {
  //   bridgeAndArea: String,
  // }

  constructor() {
    this.sceneOne = new Scene('The First Scene', [new Light(1)]);
    console.log(this.sceneOne);
    console.log(this.sceneList);

    this.addScene('192.168.1.1', 8, [1, 5, 8 , 9]);
  }

  public getScene() {

    console.log(this.sceneOne);
  }

  public addScene(bridgeIP: string,
                  areaID: number,
                  lightIDs: number[]) {

    const lights: Light[] = [];

    lightIDs.forEach( (lightID) => {
      lights.push( new Light(lightID) );
    });

    lights[0].type = 'fire';

    this.sceneList[bridgeIP] = {};
    this.sceneList[bridgeIP][areaID] = {};
    this.sceneList[bridgeIP][areaID]['Tester'] = lights;
    
    console.log(this.sceneList);

    //console.log(this.sceneList);
  }

  public updateScene() {

  }

}
