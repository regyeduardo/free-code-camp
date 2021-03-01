function getIndexToIns(arr, num) {
    let a = 0;
    for (let i=0;i<arr.length;i++){
      if (num <= arr[i]) {
        a = i
        break;
      }
    }
    return a
  }

  getIndexToIns([10, 20, 30, 40, 50], 35)