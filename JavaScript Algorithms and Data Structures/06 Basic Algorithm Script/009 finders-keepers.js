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

findElement([1, 2, 3, 4], num => num % 2 === 0);