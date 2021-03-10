// Only change code below this line
function urlSlug(title) {

let newString = title.toLowerCase().match(/\w*\S/g)
return newString.join("-")

}
// Only change code above this line

console.log(urlSlug("Winter Is Coming"))