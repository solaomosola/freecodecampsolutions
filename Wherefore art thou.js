function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
var keys = Object.keys(source);


  arr = collection.filter(item=> 
  {
   let okay = true; // iterate through all the keys. Okay only if all keys and values remain true
  for (let i=0;i<keys.length;i++){
 okay &= (source[keys[i]]=== item[keys[i]])
  }
  return okay;
  }
  )
  console.log(arr)

  // Only change code above this line
  return arr;
} 

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
