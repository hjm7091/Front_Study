function makeCounter() {
    var count = 0;
    return f;
    function f() {
        return count++;
    }
}

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());