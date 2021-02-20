function compose(f, g) {
    return function(x) {
        return f.call(this, g.apply(this, arguments));
    };
}

var square = function(x) { return x * x; };
var add1 = function(x, y) { return x + y; };
var h = compose(square, add1);
console.log(h(2, 3));