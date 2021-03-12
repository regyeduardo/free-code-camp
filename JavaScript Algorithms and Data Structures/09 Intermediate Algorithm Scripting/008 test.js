function myReplace(str, before, after) {
    if (before[0].match(/[A-Z]/g) !== null) {
        let alter = `${after[0].toUpperCase()}${after.slice(1,after.length)}`
        let regex =  new RegExp(before)
        return str.replace(regex, alter);
    } else if (before[0].match(/[a-z]/g) !== null) {
        let alter = `${after[0].toLowerCase()}${after.slice(1,after.length)}`
        let regex =  new RegExp(before)
        return str.replace(regex, alter)
    }
  }

  myReplace("I think we should look up there", "up", "Down")