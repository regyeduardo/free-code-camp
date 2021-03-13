function rot13(str) {
    let abc = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    let a = []
    for (let index=0;index<str.length;index++) {
      if (abc.includes(str[index])){
        if (abc.indexOf(str[index]) + 13 > 25) {
          a.push(abc[abc.indexOf(str[index]) - 13])
        } else {
          a.push(abc[abc.indexOf(str[index]) + 13])
        }
      } else {
        a.push(str[index])
      }
    }
    return a.join("");
  }
  
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))