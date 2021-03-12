function palindrome(str) {
    let check = ["_","*","#"," ","-",".",",","/","\\",":",")","("]
    let a = []
    let o = []
    for (let i=0;i<str.length;i++){
        if (check.includes(str[i])){
            //pass
        } else {
            o.push(str[i])
        }
    }
    for (let i = o.join("").length -1;i>=0;i--){
        if (!check.includes(o[i])) {
            a.push(o[i])
        }
    }
    return o.join("").toLowerCase() === a.join("").toLowerCase();
  }
  


palindrome("eye");