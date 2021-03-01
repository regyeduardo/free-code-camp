function largestOfFour(arr) {
    let a = []
    for (let index in arr) {
        let aux = undefined;
      for (let s_index in arr[index]) {
        if (s_index == 0) {
          aux = arr[index][s_index]
        } else if (arr[index][s_index] > aux) {
          aux = arr[index][s_index]
        }
      }
      a.push(aux)
    }
    return a;
  }

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);