function destroyer(arr, ...destroyers) {
    return arr.filter(i => !destroyers.includes(i))
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);