/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function convertToRoman(num) {
  let romanObj = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    9 : "IX",
    5: "V",
    4: "IV",
    1: "I"
  }
  let roman = (val) => {
    let converted = romanObj[val];
    if (val == 0) {
      return "";
    }
    else if (romanObj.hasOwnProperty(val)) {
      return romanObj[val];
    }
    else if (val >= 1 && val < 4) {
      return "I" + roman(val - 1);
    }
    else if (val >= 5 && val < 9) {
      return "V" + roman(val - 5);
    }
    else if (val >= 10 && val < 39) {
      return "X" + roman(val - 10);
    }
    else if (val >= 39 && val <50){
      return "XL" + roman (val - 40)
    }
    else if (val >= 50 && val < 90) {
      return "L" + roman(val - 50);
    }
    else if (val >= 90 && val < 100){
      return "XC" + roman (val - 90);
    }
    else if (val >= 100 && val < 400) {
      return "C" + roman(val - 100);
    }
    else if (val>=400 && val <500){
      return "CD" + roman(val-400);
    }
    else if (val >= 500 && val < 900) {
      return "D" + roman(val - 500);
    }
    else if (val>=900 && val<1000){
      return "CM" + roman(val-900);
    }
    else if (val >= 1000) {
      return "M" + roman(val - 1000);
    }
    return converted
  }
//  console.log(roman(649))
  return roman(num);
}

console.log(convertToRoman(36));
