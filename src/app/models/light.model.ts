export class Light  {

    public id: Number;
    public type: String;
    public baseColour = {};
    public brightness = {};
    public emberOptions = {};
    public on: Boolean;

    constructor(id) {
        this.id = id;
        this.type = 'bulb';
        this.on = true;

        this.baseColour = {
            x: 255,
            y: 200
        };
        this.brightness = {
            min: 1,
            max: 255
        };
    }

}

