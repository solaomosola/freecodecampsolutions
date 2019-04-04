/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function convertHTML(str) {
  let retStr="";
  // &colon;&rpar;
  let entity = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&apos;"
  }
  for (let i=0;i<str.length;i++){
    
    retStr+= entity.hasOwnProperty(str[i])?entity[str[i]]:str[i];
  }
  console.log(retStr)
  return retStr;
}

convertHTML("Dolce & Gabbana");
