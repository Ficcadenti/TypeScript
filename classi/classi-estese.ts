class AnimaleBase {
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public move(mt: number): void {
        console.log('Mi muovo di ' + mt + ' metri')
    }
}

class Uccello extends AnimaleBase {
    public abitat: string = '';

    constructor({ name, abitat = 'ABITAT' }: { name: string; abitat?: string; }) {
        super(name);
        this.abitat = abitat;
    }

    public getAbitat(): string {
        return this.abitat;
    }

    public setAbitat(abitat: string): void {
        this.abitat = abitat;
    }

    public move(mt: number): void {
        console.log('Volo di ' + mt + ' metri')
    }


}

let colomba = new Uccello({ name: 'Colomba' });
console.log(colomba);
colomba.move(10);