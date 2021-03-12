function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let a = Object.keys(source);
  collection.map(function(i){
      if (i.hasOwnProperty(...Object.keys(source))){
          var check;
          for (let j=0;j<a.length;j++){
              if (source[a[j]] === i[a[j]]){
                  check = true
              } else {
                  check = false
                  break
              }
          }
          if (check) {
              arr.push(i)
          }
      }
  })
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });