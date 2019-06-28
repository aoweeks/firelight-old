export class SceneList  {
    [index: string]: { // Bridge IP
        [index: number]: { // Area #
            [index: string]: any[] // Scene #
        }
    }

    // [bridge: string]: {
    //     // [area: number]: {
    //     //     lights: {}
    //     // }
    //     message: string;
    // }

    constructor() {}
}
