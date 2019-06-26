const HueAPI = require('node-hue-api').HueApi;

import { Injectable, APP_ID} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  private host: String = '192.168.1.1';
  private username: String = 'jmH6jb0WkG4rGdISVpDZvRyx2bDR2m7xtcVFWCVe';
  private clientKey: Buffer = new Buffer('810C8593D619AD8AECE88E63FFAFE52F', 'hex');
  private hue: any = new HueAPI(this.host, this.username);

  public isOnline: Boolean = false;
  public entertainmentAreas: any;
  public currentArea: any;
  public currentAreaScenes: Object[] = [{name: 'One'}, {name: 'Two'}];
  public currentScene: Object;

  constructor() {

    setInterval(() => this.updateBridgeStatus(), 3000);
  }

  // Check if current selected bridge is online by checking version
  private updateBridgeStatus(): void {
    this.hue.getVersion()
            .then( (result) => {
              this.isOnline = true;

              if (!this.entertainmentAreas) {
                this.findEntertainmentAreas();
              }
            })
            .catch( (error) => {
              this.isOnline = false;
            })
            .done();
  }

  // Populate list of entertainment areas on selected bridge
  private findEntertainmentAreas() {
    this.hue.groups()
            .then( (result) => {
              const entertainmentAreas = result.filter( (group) => {
                if (group.type === 'Entertainment') { return group; }
              });

              entertainmentAreas.forEach( async (area) => {
                area.lights = await this.findLightsInArea(area);
              });

              console.log(entertainmentAreas);
              this.entertainmentAreas = entertainmentAreas;
            })
            .done();
  }

  // Return info for each light in a given entertainment area, from bridge
  private async findLightsInArea(area) {
    const lightIDList = await this.hue.getGroup(area.id);

    const lights = {};
    await Promise.all(lightIDList.lights.map( async (lightID) => {
        lights[lightID] = await this.hue.lightStatus(lightID);
    }));

    return lights;
  }

  public getAreaInfo(area: Number) {
    // return this.
    // const lightinArea = this.allLightsInfo.filter({

    // });
  }
}
