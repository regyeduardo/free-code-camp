const squareList = arr => {
    // Only change code below this line
    return arr.filter(i => Number.isInteger(i)&& i > 0)
    .map(
      i => Math.pow(i, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);