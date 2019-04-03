function translatePigLatin(str) {
  let regex = /[^aeiou]+/g;
  let newStr = [...str];
  let retstr="";
  
  if (regex.test(str[0])){
   let subst = str.match(regex)[0];
retstr = str + str.match(regex)[0]+"ay";
retstr = retstr.substring(subst.length); 
  }
  else{
    retstr = str + "way";
  }
  console.log(retstr)
  return retstr;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("california");
translatePigLatin("glove");
