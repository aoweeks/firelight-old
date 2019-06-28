import { Injectable } from '@angular/core';
import { Light } from '../models/light.model';
import { Scene } from '../models/scene.model';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  private sceneList: Object = {
    bridge: {
      area: null
    }
  };

  private sceneOne;
  // private sceneList = {
  //   bridgeAndArea: String,
  // }

  constructor() {
    this.sceneOne = new Scene('The First Scene', [new Light(1)]);
    console.log(this.sceneOne);

    this.addScene('192.168.1.1', 8, [1, 5, 8 , 9]);
  }

  public getScene() {

    console.log(this.sceneOne);
  }

  public addScene(bridgeIP: String,
                  area: Number,
                  lightIDs: Number[]) {

    const lights: Light[] = [];

    lightIDs.forEach( (lightID) => {
      lights.push( new Light(lightID) );
    });

    lights[0].type = 'fire';

    //placeholder
    const id = 0;

    this.sceneList[bridgeIP] = lights;

    console.log(this.sceneList);
  }

  public updateScene() {

  }

}
