function truncateString(str, num) {
    function spliceSlice(str, index, count, add) {
        // We cannot pass negative indexes directly to the 2nd slicing operation.
        if (index < 0) {
          index = str.length + index;
          if (index < 0) {
            index = 0;
          }
        }
      
        return (num >= str.length) ? str : str.slice(0, index) + (add || "") + str.slice(index + count);
      }

      let a = spliceSlice(str, num, str.length-num, "...")
      return a
  }

truncateString("A-tisket a-tasket A green and yellow basket", 8);