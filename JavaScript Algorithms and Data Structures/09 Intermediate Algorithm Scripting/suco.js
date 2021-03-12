function whatIsInAName(collection, source) {
    var arr = []
    a = Object.keys(source);
    collection.map(function(i){
        if (i.hasOwnProperty(...Object.keys(source))){
            var check;
            for (let j=0;j<a.length;j++){
                if (source[a[j]] === i[a[j]]){
                    check = true
                } else {
                    check = false
                    break
                }
            }
            if (check) {
                arr.push(i)
            }
        }
    })
    return arr
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))

