function destroyer(arr) {
let [initArr, ...bal] = arguments;
 
let newArr = initArr.filter((val)=>
{
return (!bal.includes(val))
}
)
console.log(newArr)
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
