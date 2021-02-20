// function F() {}
// console.log(F.prototype);
// // F.prototype.prop = "prototype value";
// var obj = new F();
// console.log(obj.__proto__.__proto__.__proto__);

var o1 = {};
console.log(o1.__proto__.__proto__);

var o2 = Object.create(Object.prototype);
console.log(o2.__proto__);

// function Circle(center, radius) {
//     this.center = center;
//     this.radius = radius;
// }
// Circle.prototype = {
//     constructor : Circle,
//     area : function() { return Math.PI * this.radius * this.radius; }
// };

// var c = new Circle({x:0, y:0}, 2.0);
// console.log(c.constructor);
// console.log(c.area());
// console.log(c instanceof Circle);