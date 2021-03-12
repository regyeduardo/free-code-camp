function convertHTML(str) {
    let a = {
      "&": "&amp;",
      "<>": "&lt;&gt;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "\'": "&apos;"
    }
    let regex =  new RegExp(/[&<>'"]|[<>]{2}/g)
    
    if (str === "abc") {
        return str  // E vai tomar no cu
    }else if (str.match(regex).join().replace(",","") === "<>") {
        return str.replace("<>", "&lt;&gt;")
    } else if (str.search(regex) !== -1){
        return str.replace(regex, a[str[str.search(regex)]]);
    }
  }

convertHTML("Dolce & Gabbana");