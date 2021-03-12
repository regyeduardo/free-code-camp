function whatIsInAName(collection, source) {
  var arr = []
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
  return arr
}
    // Only change code above this line
  console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))