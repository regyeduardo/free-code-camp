let ohStr = "Ohhhhh no";
let ohRegex = /oh{3,6}\sno/gi;
; // Change this line
let result = ohRegex.test(ohStr);

console.log(result);
