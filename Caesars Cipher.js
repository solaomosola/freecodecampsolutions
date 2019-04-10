/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function rot13(str) { // LBH QVQ VG!
    //console.log("D Me".charCodeAt(1))
    //console.log(String.fromCharCode(69+13))
    let decoded = str.split("").map(
        val => {
            let curCode = val.charCodeAt(0);
            if (curCode >= 65 && curCode <= 90) {
                return ((curCode + 13) > 90) ? String.fromCharCode(curCode - 13) : String.fromCharCode(curCode + 13);
            }
            else
                return val;
        }
    );

    return decoded.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
