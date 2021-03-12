function steamrollArray(arr) {
    let a = []
    const lalala = function(i){
        if (Array.isArray(i)) {
            i.map(j => lalala(j))
        } else {
            a.push(i)
        }
    }
    arr.map(i => lalala(i))
    return a;
  }

steamrollArray([1, [2], [3, [[4]]]]);