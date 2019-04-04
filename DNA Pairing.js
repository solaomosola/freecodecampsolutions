function pairElement(str) {
  let newArray = [];
  let workingArray = str.split("");
  
  workingArray.map(val=>{
    
  switch(val){
    case "A":
    newArray.push(["A","T"]);
    break;
    case "T":
    newArray.push(["T","A"]);
    break;
    case "G":
    newArray.push(["G","C"]);
    break;
    case "C":
    newArray.push(["C","G"]);
    break;
  }  
  
  });

  console.log(newArray);
  return newArray;
}

pairElement("GCG");
