function pairElement(str) {
    let a = []
    let z = {
      T: "A",
      A: "T",
      G: "C",
      C: "G"
    }
    for (let i=0;i<str.length;i++){
      a.push([str[i], z[str[i]]])
    }
    return a;
  }

pairElement("GCG");