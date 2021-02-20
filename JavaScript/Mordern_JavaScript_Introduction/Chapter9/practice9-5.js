// var person = { name : "Tom" };
// console.log("name" in person);
// console.log("age" in person);
// console.log("toString" in person);

var group = { groupName : "Tennis circle" };
var person = Object.create(group);
person.name = "Tom";
person.age = 17;
person.sayHello = function() { console.log("Hello! " + this.name); };
Object.defineProperty(person, "sayHello", { enumerable : false });
console.log(Object.keys(person));
var p = Object.getOwnPropertyNames(person);
for(var i = 0; i < p.length; i++) {
    console.log(person[p[i]]);
}

var person1 = {
    _name : "Tom",
    get name() {
        return this._name;
    }
};

console.log(person1._name);
person1.name = "Jin";
console.log(person1._name);