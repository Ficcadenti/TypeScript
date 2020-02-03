
console.log("Le classi !!!!");
// classes: public, private, protected
class Animale {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Lezione {
    public tipo: string;
    public lunghezza: number;
    public titolo: string;
    protected descrizione?: string;
    private count: number = 0;


    constructor(tipo: string, lunghezza: number, titolo: string, descrizione?: string) {
        this.tipo = tipo;
        this.lunghezza = lunghezza;
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.setCount(this.getCount() + 1);
    }

    public getCount(): number {
        return this.count;
    }
    protected setCount(value: number) {
        this.count = value;
    }


}

//Estensione di classe
class VideoLezione extends Lezione {
    setDescrizione(descrizione: string) {
        this.descrizione = descrizione;
    }
}

//classe Animale
let gatto = new Animale("Mia");
let cane = new Animale("Pluto");
console.log(gatto.getName());
console.log(cane.getName());

//classe Lezione
let lezione1 = new Lezione('Videocorso', 10, "TypeScript", "");
console.log(lezione1);

//classe Videolezione
let videoLezione1 = new VideoLezione('Videocorso', 10, "TypeScript", "");
videoLezione1.setDescrizione("Video lezione1 !!!");
console.log(videoLezione1.getCount());