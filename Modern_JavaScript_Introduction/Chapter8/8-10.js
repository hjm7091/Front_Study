function Primes(n) {
    var p = [];
    for(var i = 2; i <= n; i++) {
        p[i] = true;
    }
    var max = Math.floor(Math.sqrt(n));
    var x = 2;
    while(x <= max) {
        for(var i = 2 * x; i <= n; i += x) {
            p[i] = false;
        }
        while(!p[++x]);
    }

    return function(m) {
        var primes = [];
        for(var i = 2; i <= m; i++) {
            if(p[i])
                primes.push(i);
        }
        return primes;
    };
}

var primeProduct = Primes(10000);
var primes = primeProduct(1000);
var result = "";
var count = 0;
for(var i = 0; i < primes.length; i++) {
   result += primes[i] + " ";
   count++;
}
console.log(result);
console.log(count);