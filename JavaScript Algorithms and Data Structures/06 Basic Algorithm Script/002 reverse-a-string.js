function reverseString(str) {
    let a = str;
    str = "";
    for (let i = (a.length - 1); i>=0; i--) {
      str = `${str}${a[i]}`
    }
    return str;
  }

reverseString("hello");