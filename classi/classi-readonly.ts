class Car {
    readonly versione: string = '1.1';

    constructor(
        protected nome: string,
        protected modello: string,
        protected anno: string,
        public colore: string, versione?: string) {

        if (versione != undefined) {
            this.versione = versione;
        }

    }

    public setVersione(versione: string): void {
        //this.versione=versione;
    }

    public getVersione(): string {
        return this.versione;
    }

    public getColore(): string {
        return this.colore;
    }
}

let car = new Car('Fiat 500', '500C', '2020', 'Rosso', '2.1');
console.log('Versione : ' + car.getVersione());
console.log('Colore   : ' + car.getColore());
