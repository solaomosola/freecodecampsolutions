/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 -- This took some time indeed.
 -- After research, I do think that the traditional method of finding LCM/SCM (Lowest Common Multiple or Smallest Common Multiple)
for a range of numbers (not just 2) is efficient. So I implemented that algorithm.
*/

function smallestCommons(arr) {
  let smaller, larger;
  if (arr[0] < arr[1]) {
    smaller = arr[0]
    larger = arr[1];
  }
  else {
    smaller = arr[1];
    larger = arr[0];
  }
  let primeArray = getPrimes(larger);
  let rangeArray = [], smallComMult = 1;

  let count = smaller;
  while (count <= larger) {
    rangeArray.push(count++);
  }
console.log(`Original Spread Array ${rangeArray}`)
  while (!rangeArray.every(val => val === 1)) {
    for (let i = 0; i < primeArray.length; i++) {
      let p = primeArray[i];
      while (rangeArray.some(inVal => inVal % p === 0)) {
        rangeArray.map((item, index) => {
          if (item % p === 0)
            rangeArray[index] /= p;
        })
        smallComMult *= p;
      }
    }
  }
  console.log(`Required Primes ${primeArray}`)
  
return smallComMult;
};
let getPrimes = (num) => {
  let n = num + 1;
  let A = new Array(n), primeArray = [], sumOfPrimes = 0;
  A.fill(true);
  let current = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (A[i]) {
      for (let j = 0; j <= n; j++) {
        current = (i * i) + (i * j);
        if (current < n)
          A[current] = false
        else
          j = n;
      }
    }
  }
  A.map((val, indx) => {
    if (indx > 1 && val)
      primeArray.push(indx)
  })
  return primeArray;
}


console.log(smallestCommons([2, 10]));

//smallestCommons([23, 18]);
