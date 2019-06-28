import { Light } from './light.model';

export class Scene {

    name: String;
    lights: Light[];

    constructor(name: String = '', lights: Light[] = []) {
        this.name = name;
        this.lights = lights;
    }
}
