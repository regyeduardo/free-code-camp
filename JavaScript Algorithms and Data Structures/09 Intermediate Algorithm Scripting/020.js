var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];
    
    this.getFirstName = () => firstName

    this.getLastName = () => lastName
    
    this.getFullName = function() {
        return `${firstName} ${lastName}`;
      };

    this.setFirstName = (first) => firstName = first

    this.setLastName = (last) => lastName = last

    this.setFullName = (firstAndLast) => {
        firstAndLast = firstAndLast
        this.setFirstName(firstAndLast.split(" ")[0])
        this.setLastName(firstAndLast.split(" ")[1])
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(Object.keys(bob).length)
  console.log(bob instanceof Person)
  console.log(bob.firstName)
  console.log(bob.getFirstName())
  bob.setFirstName("Haskell")
  console.log(bob.getFullName())
  bob.setLastName("Curry")
  console.log(bob.getFullName())
  bob.setFullName("Haskell Curry")
  console.log(bob.getFullName())