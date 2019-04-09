/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  let [firstName,lastName] = firstAndLast.split(" ");

  this.getFirstName = () => firstName;
  this.getFullName = () => `${firstName} ${lastName}`;
  this.getLastName = () => lastName;

  this.setFirstName = (first) => {
    firstName = first;    
  }
  this.setLastName = (last) => {
    lastName = last;
  }
  this.setFullName = (full) => {
    [firstName, lastName] = full.split(" ");  
  }


  return this;
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
