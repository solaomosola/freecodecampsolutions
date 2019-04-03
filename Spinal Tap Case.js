function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let regex = /_|\s|-|(?<=[a-z])(?=[A-Z])/g;
  let stArr = str.split(regex);
  let newstr = stArr.join("-").toLowerCase();
  console.log(newstr)
  return newstr;
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("thisIsSpinalTap");
spinalCase("AllThe-small Things")
