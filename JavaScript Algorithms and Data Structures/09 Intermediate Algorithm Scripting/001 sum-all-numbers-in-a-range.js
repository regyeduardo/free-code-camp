function sumAll(arr) {
    let sum = arr.reduce((amount, value, index, a) => amount + value,0)
    let a = 0
    for (let i = Math.min(...arr) + 1;i < Math.max(...arr);i++){
        a += i
    }
    return sum + a
  }