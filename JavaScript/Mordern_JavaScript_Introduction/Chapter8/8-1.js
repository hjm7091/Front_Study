function norm(x) {
    var sum = sumSquare();
    return Math.sqrt(sum);
    function sumSquare() {
        var sum = 0;
        for(var i = 0; i < x.length; i++){
            sum += x[i] * x[i];
        }
        return sum;
    }
}

var array = [2, 1, 3, 5, 7];
var n = norm(array);
console.log(n);

var x = (function fact(n) {
    if(n<=1) return 1;
    return n * fact(n-1);
})(5);

console.log(x);