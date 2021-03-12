function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.map(i => (!arr2.includes(i)) ? newArr.push(i) : false)
    arr2.map(j => (!arr1.includes(j)) ? newArr.push(j) : false)
    return newArr;
  }