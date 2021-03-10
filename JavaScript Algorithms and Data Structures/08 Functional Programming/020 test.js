function sentensify(str) {
    // Only change code below this line
    let newArray = str.split(/\W/)
    return newArray.join(" ")
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");