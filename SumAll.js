function sumAll(arr) {
  let sum = 0, a=0,b=0;
  if (arr[0]<arr[1]){
    a=arr[0];
    b=arr[1]
  } else{
    a=arr[1];
    b=arr[0]
  }
  for (let i=a;i<=b;i++)
  sum+=i;
  console.log(sum)
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([10, 5]);
