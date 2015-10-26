module models {
    export class Sensor {
        // TODO id
        private _id: any;
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        public getId(): any {
            return this._id;
        }

        public getName(): string {
            return this.name;
        }

        public setName(name: string) {
            this.name = name;
        }
    }
}