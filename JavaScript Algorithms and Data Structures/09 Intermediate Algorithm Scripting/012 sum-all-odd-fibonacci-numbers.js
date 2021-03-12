function sumFibs(num) {
    let fibo = 1;
    let a = 0
    let oddFibo = 1
    for (let i=1;i<num;i++){
        let x = a
        a = fibo
        fibo += x
        if (fibo % 2 !== 0 && fibo <= num){
            oddFibo += fibo
        }
    }
    return oddFibo;
  }

sumFibs(4);