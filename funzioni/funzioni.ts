console.log("Funzioni!!!!");

function myFunc() {
    console.log("myFunc");
}

let myFunc1 = function () {
    console.log("myFunc1");
}

let myFuncArrow = (e: string) => {
    console.log("myFuncArrow e=" + e);
}

let myFuncArrow2 = (e: number): number => e * 2;

function myFunc3(x: string, y: number): string {
    return x + ',' + y;
}

let myFunc4: (x: string, y: number) => void;

myFunc4 = myFunc3;

myFunc();
myFunc1();
myFuncArrow('Raffaele');
console.log(myFuncArrow2(4));
console.log(myFunc3('Raffaele', 43));
console.log(myFunc4('Raffaele', 43));

myFunc4 = function (name: string, eta: number): void {
    console.log(name + ',' + eta);
}

myFunc4('Raffaele', 43);