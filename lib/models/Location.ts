module models {
    export class Location {
        // TODO id
        private id: any;
        private name:string;
        private coordinateX:number;
        private coordinateY:number;

        constructor(name:string, coordinateX:number, coordinateY:number) {
            this.name = name;
            this.coordinateX = coordinateX;
            this.coordinateY = coordinateY;
        }

        public getId(): any {
            return this.id;
        }

        public getName(): string {
            return this.name;
        }

        public setName(name: string): void {
            this.name = name;
        }

        public getCoordinateX(): number {
            return this.coordinateX;
        }

        public setCoordinateX(coordinateX: number): void {
            this.coordinateX = coordinateX;
        }

        public getCoordinateY(): number {
            return this.coordinateY;
        }

        public setCoordinateY(coordinateY: number) {
            this.coordinateY = coordinateY;
        }
    }
}