function smartSum(...args) {
    let sum = 0;
    function addToSum(val) {
      if (Array.isArray(val)) {
        val.forEach(addToSum);
      } else {
        sum += val;
      }
    }
    args.forEach(addToSum);
    return sum;
  }