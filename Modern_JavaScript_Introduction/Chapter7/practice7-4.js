var a = [2, 4, 6, 8, 10];
var b = [1, 3, 5, 6, 9, 11];
loop: for(var i = 0; i < a.length; i++) {
        for(var j = 0; j < b.length; j++) {
            if(a[i] == b[j]) break loop;
        }
}
console.log("a[" + i + "] = b[" + j + "]");

var c = [[2, 4, 6, 8], [1, 5, 12, 3], [7, 6, 8, 5], [5, 15, 3, 4], [3, 2, 9, 4]];
var max = Number.NEGATIVE_INFINITY;
mainloop : for(var i = 0; i < c.length; i++) {
    var average = 0;
    for(var j = 0; j < c[i].length; j++) {
        if(c[i][j] > 10) continue mainloop;
        average += c[i][j];
    }
    average /= c[i].length;
    console.log("i = " + i + ", 평균값 = " + average);
    if(max < average) max = average;
}
console.log("최대 평균값 = " + max);