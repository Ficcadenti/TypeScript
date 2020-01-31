// any, void, never, undefined, null
let age: any = 43;
age = 'ciao';

console.log(age);

let userData: Array<any> = [45, 'Raffaele', 'Ficcadenti', { mail: 'raffaele.ficcadenti@gmail.com' }];
console.log(userData);
console.log(userData[3]);
console.log(userData[3].mail);

userData = ['aaaa', [1, 2, 3], { mail: 'raffaele.ficcadenti@gmail.com', web: 'www.raffaeleficcadenti.it' }];
console.log(userData);
userData = null;
console.log(printName());


//"strictNullChecks": false, /* Enable strict null checks. */
function printName(): void {
    console.log('Error');
    return null;
}

let p: number;
console.log(p);

function retunNever(): never {
    throw new Error('Non ritorno nulla');
}

//retunNever();
