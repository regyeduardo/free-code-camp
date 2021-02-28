var a = []
function rangeOfNumbers(startNum, endNum) {
    if (startNum < endNum) {
        a.push((startNum + endNum) - endNum)
        return rangeOfNumbers(startNum + 1, endNum - 1)
    } else if (startNum === endNum) {
        a.push(endNum)
        return rangeOfNumbers(startNum + 1, endNum - 1)
    } else if (startNum > endNum && endNum >= a[0]){
        a.push((startNum + endNum) - endNum)
        return rangeOfNumbers(startNum + 1, endNum - 1)
    } else {
        return a
    }
  };