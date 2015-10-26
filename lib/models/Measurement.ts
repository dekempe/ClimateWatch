///<reference path='../../typings/node/node.d.ts' />
///<reference path='../../typings/mongodb/mongodb.d.ts' />

///<reference path='./Location.ts' />
///<reference path='./Sensor.ts' />

module models {
    import MongoDB = MongoDB;

    import Location = Location;
    import Sensor = Sensor;

    export class Measurement {
        private _id: MongoDB.ObjectID;
        private temperature: number;
        private relativeHumidity: number;
        private heatIndex: number;
        private time: Date;
        private location: Location;
        private sensor: Sensor;

        constructor(temperature: number, relativeHumidity: number, heatIndex: number, time: Date, location: Location, sensor: Sensor) {
            this.temperature = temperature;
            this.relativeHumidity = relativeHumidity;
            this.heatIndex = heatIndex;
            this.time = time;
            this.location = location;
            this.sensor = sensor;
        }

        public getId(): MongoDB.ObjectID {
            return this._id;
        }

        public getTemperature(): number {
            return this.temperature;
        }

        public setTemperature(temperature: number): void {
            this.temperature = temperature;
        }

        public getRelativeHumidity(): number {
            return this.relativeHumidity;
        }

        public setRelativeHumidity(relativeHumidity: number): void {
            this.relativeHumidity = relativeHumidity;
        }

        public getHeatIndex(): number {
            return this.heatIndex;
        }

        public setHeatIndex(heatIndex: number): void {
            this.heatIndex = heatIndex;
        }

        public getTime(): Date {
            return this.time;
        }

        public setTime(time: Date): void {
            this.time = time;
        }

        public getLocation(): Location {
            return this.location;
        }

        public setLocation(location: Location) {
            this.location = location;
        }

        public getSensor(): Sensor {
            return this.sensor;
        }

        public setSensor(sensor: Sensor) {
            this.sensor = sensor;
        }
    }
}