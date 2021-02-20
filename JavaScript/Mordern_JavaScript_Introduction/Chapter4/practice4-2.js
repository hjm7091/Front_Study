function dist(p, q) {
    var dx = q.x - p.x;
    var dy = q.y - p.y;
    return Math.sqrt(dx*dx + dy*dy);
}

var p1 = {x:1, y:1};
var p2 = {x:4, y:5};
var d = dist(p1, p2);
console.log(d);

var sq = dist;
console.log(sq(p1, p2));

function add1(x) { return x = x + 1; }
var a = 3;
var b = add1(a);
console.log("a->" + a + ", b->" + b);

function add2(p) { p.x = p.x + 1; p.y = p.y + 1; return p; }
var a = {x:3, y:4};
var b = add2(a);
console.log(a, b);

function f(){
    console.log(a);
    a = "local";
    console.log(a);
}

f();
console.log(a);

let x = "outer x";
{
    let x = "inner x";
    let y = "inner y";
    console.log(x);
    console.log(y);
}
console.log(x);

const origin = {x:1, y:2};
console.log(origin);
origin.x = 3;
console.log(origin);

var square = function (x) { return x * x; }

console.log(square("3123"));

var circle = {
    center : { x:1.0, y:2.0 },
    radius : 2.5,
    area : function () {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area());

circle.translate = function(a, b) {
    this.center.x += a;
    this.center.y += b; 
}

circle.translate(1, 2);
console.log(circle.center);