function truthCheck(collection, pre) {
    let jj = [NaN, undefined, 0, null, ""]
    const somebody = (a, b) => a.every(i => i.hasOwnProperty(b)
    && !jj.includes(i[b]) && !i[b] === false)
    return somebody(collection, pre);
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")