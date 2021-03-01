function repeatStringNumTimes(str, num) {
  let a = "";
  for (let i=0;i<num;i++) {
    a = `${a}${str}`
  }
  return a;
}

repeatStringNumTimes("abc", 3);