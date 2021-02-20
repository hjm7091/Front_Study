function makeCounter() {
    var count = 0;
    return function() {
        return count++;
    };
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

console.log(Math.random() * 3);