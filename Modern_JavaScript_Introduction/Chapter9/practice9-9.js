var o = { name : "Tom", age : 17, marriage : false, data : [2, 5, null] };
var s = JSON.stringify(o);
console.log(s);
var p = JSON.parse(s);
console.log(p);