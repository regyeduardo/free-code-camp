let haStr = "Hazzzzzzah";
let haRegex = /Haz{4,}ah/gi; // Change this line
let result = haRegex.test(haStr);

console.log(result);