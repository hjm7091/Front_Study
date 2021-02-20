// var pi = 3.14;
// console.log(pi);
// pi = "원주율";
// console.log(pi);
// console.log(0/0);
// var string = "I'm going to learn JavaScript";
// console.log(string);
// console.log(2 == 2);
// console.log(2 == 3);

var NONE = Symbol("none");
var BLACK = Symbol("black");
var WHITE = Symbol("white");
console.log(NONE);
console.log(BLACK);
console.log(WHITE);

var t = `"Man errs as long as \nhe strives."`;
console.log(t);
t = String.raw`"Man errs as long as \nhe strives."`;
console.log(t);

var a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`);
var nowDate = new Date();
console.log(`오늘은 ${nowDate.getMonth()+1}월 ${nowDate.getDate()}일입니다.`);