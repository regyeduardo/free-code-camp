let sampleWord = "banan1";
let pwRegex = /(?=\w)(?=\D\d{2,2})/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);