// function f(a, b, ...args) {
//     console.log(a, b, args);
// }

// f(1, 2, 3, 4, 5, 6);

// var a = [5, 4, 3];
// a.forEach(function(val) { console.log(val) });

// for (const v of "ABC") {
//     console.log(v);
// }

function* idMaker() {
    var count = 0;
    while(true) {
        try {
            yield count++;
        } catch (e) {
            console.log(e);
        }
    }
}

var iter = idMaker();
console.log(iter.next());
console.log(iter.next());
iter.throw(new Error("오류"));
console.log(iter.return(10));

function* f() {
    yield "X";
    yield "Y";
}

function* g() {
    yield 0;
    yield* [2, 4];
    yield* "AB";
    yield* f();
}

for (const v of g()) {
    console.log(v);
}