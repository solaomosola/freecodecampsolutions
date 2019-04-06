/*
Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Implementing Erathosthenes Algorithm to solve this problem.

*/
function sumPrimes(num) {
let n = num+1;

 let A = new Array(n),primeArray=[],sumOfPrimes=0;
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
  console.log(primeArray)
  sumOfPrimes = primeArray.reduce((a,b)=>a+b);
  console.log(sumOfPrimes);
  return sumOfPrimes;
}

sumPrimes(10);
sumPrimes(977)
