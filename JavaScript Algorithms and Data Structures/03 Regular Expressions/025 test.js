let ohStr = "Ohhhhhhh no";
let ohRegex = /h{3,6}/;
; // Change this line
let result = ohRegex.test(ohStr);

console.log(result);
