function mutation(arr) {
//assume its true until something is found that does not belong there
let ret_val = true;  
let secondstring = arr[1];
for (let i=0;i<secondstring.length;i++){
  if (arr[0].toLowerCase().indexOf(secondstring[i].toLowerCase())===-1)
  {
    ret_val=false;
    break;
  };
 
}
  return ret_val;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Army"]));
