function findLongestWordLength(str) {
  let a = " ";
  str = str.split(" ");
    for (let word in str) {
      if (str[word].length > a.length) {
        a = str[word];
      }
    }
  return a.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));