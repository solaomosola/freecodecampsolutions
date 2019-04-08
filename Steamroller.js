/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArray = []
  arr.map(item => {
    if (Array.isArray(item)) {
      newArray = [...newArray, ...(steamrollArray(item)) ];
    }
    else {
      newArray.push(item)
    }
  }
  )
  console.log(newArray);
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]])
