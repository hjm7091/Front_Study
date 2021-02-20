var pow = function(exponent) {
    return function(base) {
        return Math.pow(base, exponent);
    };
}

var square = pow(2);
var sqrt = pow(.5);
var sum = function(a, b) { return a + b; };
var a = [1, 2, 3, 4];
var abs_a = pow(0.5)(a.map(pow(2)).reduce(sum));
var abs_b = sqrt(a.map(square).reduce(sum));
console.log(abs_a);
console.log(abs_b);