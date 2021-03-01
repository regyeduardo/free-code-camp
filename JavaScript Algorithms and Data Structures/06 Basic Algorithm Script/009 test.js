function findElement(arr, func) {
    let even = undefined;
    for (let i = 0;i<arr.length;i++) {
      if (func(arr[i]) && even == undefined) {
        even = (arr[i])
        break;
      }
    }
    return even;
  }
  
  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })