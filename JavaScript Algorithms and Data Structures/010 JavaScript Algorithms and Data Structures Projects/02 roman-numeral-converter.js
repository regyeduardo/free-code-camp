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