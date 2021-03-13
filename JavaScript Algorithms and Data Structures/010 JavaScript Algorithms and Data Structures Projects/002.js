
// let number = 3999
// let a = []
// let b = []
// let roman = {
//     1000: "M",
//     500: "D",
//     100: "C",
//     50: "L",
//     10 : "X",
//     5: "V",
//     1: "I"
// }

// while (number > 0) {
//     b = [1]
//     for (let index=1;index<number.toString().length;index++) {
//         b.push(0)
//     }
//     let divisor = parseInt(b.join(""))
//     let count = parseInt(number/divisor)

//     if (count < 4) {
//         for (let index=0;index<count;index++){
//             a.push(roman[divisor])
//         }
//     } else if (count === 4) {
//         a.push(roman[divisor])
//         a.push(roman[divisor*5])
//     } else if (count === 5) {
//         a.push(roman[divisor*count])
//     } else if (count < 9) {
//         a.push(roman[divisor*5])
//         for (let index=0;index<(divisor*count - 5*divisor)/divisor;index++) {
//             a.push(roman[divisor])
//         }
//     } else {
//         a.push(roman[divisor])
//         a.push(roman[divisor * 10])
//     }
//     number %= divisor
// }

function convertToRoman(number) {
    let a = []
    let b = []
    let roman = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10 : "X",
    5: "V",
    1: "I"
    }

    while (number > 0) {
        b = [1]
        for (let index=1;index<number.toString().length;index++) {
            b.push(0)
        }
        let divisor = parseInt(b.join(""))
        let count = parseInt(number/divisor)

        if (count < 4) {
            for (let index=0;index<count;index++){
                a.push(roman[divisor])
            }
        } else if (count === 4) {
            a.push(roman[divisor])
            a.push(roman[divisor*5])
        } else if (count === 5) {
            a.push(roman[divisor*count])
        } else if (count < 9) {
            a.push(roman[divisor*5])
            for (let index=0;index<(divisor*count - 5*divisor)/divisor;index++) {
                a.push(roman[divisor])
            }
        } else {
            a.push(roman[divisor])
            a.push(roman[divisor * 10])
        }
        number %= divisor
    }
        return a.join("");
   }

   convertToRoman(36);

// operations(number)

// while (num > 0) {
//     if (num/1000 >= 1){
//         let b = parseInt((num/1000 + "").split(".")[0])
//         for (let index=0;index<b;index++){
//             a.push("M")
//         }
//         num = parseInt((num/1000 + "").split(".")[1])
//     } else if(num/100 >= 1) {
//         let b = parseInt((num/100 + "").split(".")[0])
//         if (b < 4) {
//             for (let index=0;index<b;index++){
//                 a.push("C")
//             }
//         } else if (b === 4) {
//             a.push("DC")
//         } else if (b >= 5 && b < 9) {
//             a.push("D")
//             for (let index=0;index<b-5;index++) {
//                 a.push("C")
//             }
//         } else {
//             a.push("CM")
//         }
//         num = parseInt((num/100 + "").split(".")[1])
//         }
// }