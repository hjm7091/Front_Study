class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
}

var person = new Person("Jin");
console.log(person.name);
person.name = "Tom";
console.log(person.name);
person.sayName();