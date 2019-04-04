/*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function fearNotLetter(str) {
  let retletr;
  let strArray = str.split("");
  for (let i=0;i<strArray.length-1;i++){
  let diff = strArray[i+1].charCodeAt(0) - strArray[i].charCodeAt(0); 
    if (diff === 2){
      retletr = String.fromCharCode(strArray[i].charCodeAt(0)+1);
    }
  }
 
  return retletr;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
