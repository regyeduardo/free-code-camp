function uniteUnique(...arr) {
    let a = []
    arr.map(function (i){
        i.map(j => (!a.includes(j)) ? a.push(j) : false)
    })
    return a;
  }
  

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);