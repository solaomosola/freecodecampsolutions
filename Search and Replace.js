function myReplace(str, before, after) {
  let regex = /[A-Z]/;

  let newAfter = after;
  if (regex.test(before)){
    //Upper case start
     newAfter = after.substring(0,1).toUpperCase() + after.substring(1);
  }else{
    //lower case start
    newAfter = after.substring(0,1).toLowerCase() + after.substring(1);

  }

  let newStr = str.replace(before,newAfter);
  console.log(newStr)
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
myReplace("Let us go to the store", "store", "mall")
