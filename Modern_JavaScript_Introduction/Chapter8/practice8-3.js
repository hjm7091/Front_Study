function multiply(a, b) {
    b = b || 1;
    return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(2));

function f(x, y) {
    arguments[1] = 3;
    console.log("x = " + x + " y = " + y);
}
f(1, 2);