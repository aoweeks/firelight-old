const HueAPI = require('node-hue-api').HueApi;

import { Injectable, APP_ID} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService{

  private host: String = '192.168.1.1';
  private username: String = 'jmH6jb0WkG4rGdISVpDZvRyx2bDR2m7xtcVFWCVe';
  private clientKey: Buffer = new Buffer('810C8593D619AD8AECE88E63FFAFE52F', 'hex');
  private hue: any = new HueAPI(this.host, this.username);

  public isOnline: Boolean = false;
  public entertainmentAreas: Object[];

  constructor() {

    this.checkBridgeStatus();
    setInterval(() => this.checkBridgeStatus(), 3000);
  }

  // Check if current selected bridge is online by checking version
  checkBridgeStatus() {
    this.hue.getVersion()
            .then( (result) => {
              this.isOnline = true;

              if (!this.entertainmentAreas) {
                this.getEntertainmentAreas();
              }
            })
            .catch( (error) => {
              this.isOnline = false;
            })
            .done();
  }

  getEntertainmentAreas() {
    this.hue.groups()
            .then( (result) => {
              this.entertainmentAreas = result.filter( (group) => {
                if (group.type === 'Entertainment') { return group; }
              });
              console.log(this.entertainmentAreas);
            })
            .done();
  }
}