import { Light } from './light.model';

export class Scene {


    constructor(lightIDs: number[]) {
        // this.lights = lights;

        lightIDs.forEach( (lightID) => {
            this[lightID] = new Light(lightID);
        });

    }
}
