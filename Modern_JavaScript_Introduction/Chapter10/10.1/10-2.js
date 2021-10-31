function permutation(a) {
    return a.reduce(function(list, element) {
        var newList = [];
        // console.log(`list : ${list}, element : ${element}`);
        list.forEach(function(seq) {
            // console.log(`seq : ${seq}`);
            for(var i=seq.length; i>=0; i--) {
                var newseq = [].concat(seq);                
                newseq.splice(i, 0, element);
                // console.log(newseq);
                newList.push(newseq);
            }
        });
        // console.log(newList);
        return newList;
    }, [[]]);
}

var a = [1, 2, 3];
permutation(a).forEach(v => console.log(v));