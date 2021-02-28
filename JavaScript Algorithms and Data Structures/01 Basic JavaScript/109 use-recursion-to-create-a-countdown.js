function countdown(n){
    if (n < 1){
        return [];
    } else {
        var count = countdown(n - 1);
        count.unshift(n)
    return count;
    }
    
  }