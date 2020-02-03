// setters & getters
class User {
    private _name: string;

    constructor() {
        this._name = '';
    }
    set name(name: string) {
        this._name = name.toUpperCase();
    }
    get name() {
        return this._name;
    }
}

let user = new User();
user.name = 'Raffaele';
console.log(user.name);