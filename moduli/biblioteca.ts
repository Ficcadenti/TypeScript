import { Libro, Categorie as AliasCategorie } from './moduli/libro';

let libro = new Libro();
libro.anno = 1975;
libro.titolo = 'Factotum';
libro.autore = 'Charles Bukowski'
libro.contenuto = 'Un romanzo avventuroso e osceno, divertito e disperato, sboccato e insieme lirico.';

console.log(libro);
console.log(AliasCategorie);



import * as libri from './moduli/libro';
console.log(libri);
let libro2 = new libri.Libro();
libro.anno = 1975;
libro.titolo = 'Factotum';
libro.autore = 'Charles Bukowski'
libro.contenuto = 'Un romanzo avventuroso e osceno, divertito e disperato, sboccato e insieme lirico.';
console.log(libro);
console.log(libri.Categorie);

import Test from './moduli/libro2';
let libro3 = new Test();
libro3.anno = 1975;
libro3.titolo = 'Factotum';
libro3.autore = 'Charles Bukowski'
libro3.contenuto = 'Un romanzo avventuroso e osceno, divertito e disperato, sboccato e insieme lirico.';
console.log(libro3);