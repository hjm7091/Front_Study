var tom = { name : "Tom" };
console.log(Object.getOwnPropertyDescriptor(tom, "name"));
var obj = {};
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
Object.defineProperty(obj, "name", {
    value : "Tom",
    writable : true,
    enumerable : false,
    configurable : true
});
console.log(Object.getOwnPropertyDescriptor(obj, "name"));