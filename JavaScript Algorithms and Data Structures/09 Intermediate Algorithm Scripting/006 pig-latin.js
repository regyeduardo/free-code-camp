function translatePigLatin(str) {
    let vowel = ['a','e','i','o','u']
    let n, s;
    if (vowel.includes(str[0])) {
      return `${str}way`
    } else {
      for (let i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
          n = str.slice(0,i)
          s = str.slice(i,str.length)
          break
        }
      }
    }
    if (n === undefined) {
        return `${str}ay`
    } else {
        return `${s}${n}ay`
    }
  }

translatePigLatin("consonant");