var evens = [2, 4, 6, 8];
console.log(evens);

var a = [2, , "fdfd"];
console.log(a);

var a = ["A", "B", "C", "D"];
console.log(a.length);
a.length = 2;
console.log(a);
console.log(a["1"]);

var a = ["A", "B", "C"];
a[3] = "D";
console.log(a);
a.push("E");
console.log(a);
delete a[1];
console.log(a);

for (var i in a)
    console.log(i);

console.log(a.hasOwnProperty("3"));
console.log(a.hasOwnProperty("1"));