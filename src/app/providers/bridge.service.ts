const hueAPI = require('node-hue-api');

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor() {

  console.log('loaded');
  }
}
