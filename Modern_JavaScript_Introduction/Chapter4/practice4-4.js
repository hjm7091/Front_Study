var now = new Date();
console.log(now);

var then = new Date(2018, 5, 10);
console.log(then);

var elapsed = now - then;
console.log(elapsed);

console.log(now.toLocaleString());

var square = new Function("x", "return x * x");
console.log(square(5));
