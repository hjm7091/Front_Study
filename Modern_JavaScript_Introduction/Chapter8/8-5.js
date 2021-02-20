function quickSort(x, first, last) {
    var p = x[Math.floor((first+last)/2)];
    for(var i = first, j = last; ; i++, j--) {
        while(x[i] < p) i++;
        while(x[j] > p) j--;
        if( i >= j) break;
        swap(x, i, j);
    }
    if(first < i-1) quickSort(x, first, i-1);
    if(last > j+1) quickSort(x, j+1, last);
}

function swap(x, i, j) {
    var tmp = x[i];
    x[i] = x[j];
    x[j] = tmp;
}

var a = [7, 2, 5, 1, 8, 9, 3];
quickSort(a, 0, a.length-1);
console.log(a);