function convertToRoman(num) {
    let a = []
    const insertItem = (i, q) => {
        for (let j=0;j<q;j++){
            a.join(i)
        }
    }
    const operations = (d,v) => {
        let p = (num/d + "").split(".")
        num = ParseInt(p[1])
        if (parseInt(num / d) === 9) {
            a.push("CM")
        }
        insertItem(v,parseInt(p[1]))
        
    }
    while(num > 0) {
      if (num / 1000 >= 1) {
        operations(1000, "M")
    } else if (num / 100 >= 1) {
        operations(100,"C")
    }
      
    }
    
  
   return num;
  }
  
  convertToRoman(36);