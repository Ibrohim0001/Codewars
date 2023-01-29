function getSum(a, b) {
  let resulta = Math.min(a , b)
  let resultb = Math.max(a ,b)
  let sum = 0;
  
  if (a === b) {
      return a;
  }

  for (let i = resulta; i <= resultb; i++) {
      sum += i;
  }
  return sum;
}