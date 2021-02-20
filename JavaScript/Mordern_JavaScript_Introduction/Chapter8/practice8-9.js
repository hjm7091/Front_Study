function joinStrings(n, f) {
    var s = "";
    for(var i = 0; i < n; i++) {
        s += f(i);
    }
    return s;
}

var digits = joinStrings(10, function(i) { return i; });
var randomChars = joinStrings(8, function(i) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
});
console.log(digits);
console.log(randomChars);