let isDone: boolean = false;
let myname: string = "Raffaele";
let eta: number = 43;
let listN: Array<number> = [1, 2, 3];
let listS: string[] = ['1', '2', '3'];
let obj: object = {};
let params: [string, number];
enum DAYS {
    LUNEDI = 1,
    MARTEDI,
    MERCOLEDI,
    GIOVEDI,
    VENERDI,
    SABATO,
    DOMENICA
};
enum DAYS {
    GIORNO = 8,
    NOTTE
}
let giorno: DAYS = DAYS.MERCOLEDI;

function showParams(p: [string, number]) {
    console.log("showParams : " + p[0] + ';' + p[1]);
}

function isWorkingDay(day: DAYS) {
    if (day == DAYS.SABATO || day == DAYS.DOMENICA) {
        return false;
    } else {
        return true;
    }
}

isDone = 4 > 5;
params = ["Raffaele", 43];

console.log("boolean: " + isDone);
console.log("string: " + myname);
console.log("number: " + eta);
console.log("Array<number>: " + listN);
console.log("string[]: " + listS);
console.log("object: " + obj);
console.log("tuple: " + params);
console.log("enum: " + DAYS);
console.log("giorno: " + giorno);
console.log("giorno: " + DAYS[1]);
console.log("giorno: " + DAYS[8]);
console.log(isWorkingDay(DAYS.LUNEDI));

const myDay: DAYS = 8
console.log(isWorkingDay(myDay));

showParams(params);

