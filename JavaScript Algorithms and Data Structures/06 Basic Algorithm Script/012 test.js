function frankenSplice(arr1, arr2, n) {
    let newArray = []
    for (let i=0;i<n;i++){
      newArray.push(arr2[i])
    }
    for (let i=0;i<arr1.length;i++) {
      newArray.push(arr1[i])
    }
  
    for (let i=n;i<arr2.length;i++){
      newArray.push(arr2[i])
    }
    return newArray;
  }
  
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]