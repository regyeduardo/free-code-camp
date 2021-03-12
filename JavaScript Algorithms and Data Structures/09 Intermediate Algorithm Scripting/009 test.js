function fearNotLetter(str) {
    const a = "abcdefghijklmnopqrstuvwxyz"
    for (let i=a.search(str[0]);i<a.length;i++){
        if (str.search(a[i]) === -1) {
            return a[i]
       }
    }
}
  
fearNotLetter("stvwx")