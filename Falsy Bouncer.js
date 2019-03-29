function bouncer(arr) {
  // Don't show a false ID to this bouncer.
//Implementing using for
let ret_arr = [];  
for (let i=0;i<arr.length;i++){
if (arr[i]&&true){
  ret_arr.push(arr[i]);
}
}
//Implementing using array map
let ret_arr2 = [];
arr.map((val)=>{
  if(val&&true)ret_arr2.push(val);
});
  
  return ret_arr;
}

bouncer([7, "ate", "", false, 9]);


//Better Method using Filter

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter((val)=>{
    return (val&&true)
  })
  console.log(arr)
  return arr;
}

bouncer([7, "ate", "", false, 9]);
