function titleCase(str){
let newstring="";
let string_array = str.toLowerCase().split(" ");
for (let i=0; i<string_array.length;i++){
  newstring+=string_array[i][0].toUpperCase() + string_array[i].substring(1);
  if (i<string_array.length-1){
  newstring+=" ";
}
}
console.log(str+ " "+ newstring);
return newstring;
}
titleCase("I'm a little tea pot");
titleCase("I'm a little tea pot")
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")"
