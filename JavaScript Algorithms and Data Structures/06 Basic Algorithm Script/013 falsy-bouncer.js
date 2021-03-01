function bouncer(arr) {
    let falsy = [false, null, 0, "", undefined, NaN]
    let a = [] 
    for (let i=0;i<arr.length;i++){
      if (!falsy.includes(arr[i])){
        a.push(arr[i]);
      }
    }
    return a
  }

bouncer([7, "ate", "", false, 9]);