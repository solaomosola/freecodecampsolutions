/*
Intermediate Algorithm Scripting: Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function binaryAgent(str) {
  let binArray = str.split(" ");
let conArray=[];

binArray.forEach(val =>{
  let bin = val,binVal=0;
  for (let i=0;i<bin.length;i++){
  binVal += bin[i]*Math.pow(2,7-i);
  
  }
conArray.push(String.fromCharCode(binVal))
})
  return conArray.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
