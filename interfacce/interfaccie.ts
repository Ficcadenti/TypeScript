//Interfacce

interface IUser {
    nome: string,
    cognome: string
}

interface IUser2 {
    nome: string,
    cognome: string,
    mail?: string
}

interface IUser3 {
    nome: string,
    cognome: string,
    mail?: string,
    [propName: string]: any
}

function showUser(user: { nome: string, cognome: string }) {
    console.log(user.nome + ',' + user.cognome);
}

function showUser2(user: IUser) {
    console.log(user.nome + ',' + user.cognome);
}

function showUser3(user: IUser2) {
    console.log(user.nome + ',' + user.cognome);
}

function showUser4(user: IUser3) {
    console.log('showUser 4= ' + user.nome + ',' + user.cognome + ',' + user.eta);
}


showUser({ nome: 'Raffaele', cognome: 'Ficcadenti' });
showUser2({ nome: 'Raffaele', cognome: 'Ficcadenti' });
showUser3({ nome: 'Raffaele', cognome: 'Ficcadenti' });
showUser4({ nome: 'Raffaele', cognome: 'Ficcadenti', eta: 43 });
showUser4({ nome: 'Raffaele', cognome: 'Ficcadenti' });