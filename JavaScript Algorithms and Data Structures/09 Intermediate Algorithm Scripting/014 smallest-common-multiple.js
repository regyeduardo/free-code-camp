function smallestCommons(arr) {
    arr.sort((a,b) => a - b)
    let a = []
    let mmm = true;
    let c = arr[1]
    for(let i=arr[0];i<=arr[1];i++){
      a.push(i)
    }
    const pipa = i => c % i === 0
    while(mmm){
      if (a.every(pipa)) {
        mmm = false
        break
      }
      c+=1
    }
    return c
  }


console.log(smallestCommons([1, 5]));