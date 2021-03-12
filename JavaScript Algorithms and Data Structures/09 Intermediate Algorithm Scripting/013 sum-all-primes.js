function sumPrimes(num) {
    const isPrime = n => {
    for(let i = 2; i < n; i++) {
        if(n % i === 0){
            return false;
        } 
    }
    return n > 1;
  }
    let sum = 0;
    for (let j=2;j<=num;j++){
      if (isPrime(j)){
        sum += j
      }
    }
    return sum;
  }

console.log(sumPrimes(977))