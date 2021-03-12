function spinalCase(str) {
    // return str.match(/\W/g)
    return str.replace(/[A-Z]/g, " $&").trim().replace(/[^A-Za-z]/g, '-').replace(/--/g,'-').toLowerCase()
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))