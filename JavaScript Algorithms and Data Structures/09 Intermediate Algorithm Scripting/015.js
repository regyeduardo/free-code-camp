function dropElements(arr, func) {
    let o = []
    for (let i=0;i<arr.length;i++){
        if(func(arr[i])){
            o = arr.slice(arr.indexOf(arr[i]))
            break
        } 
    }
    return o
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;})