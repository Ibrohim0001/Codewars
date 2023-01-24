function hasTwoCubeSums (n){
    let count = 0;
    for (let i = 1; i < n**(1/3); i++) {
      if (count == 2) return true;
  
      let second = Math.cbrt(n - i ** 3, 1 / 3);
      if (second == parseInt(second)) {
        count += 1;
      }
    }
    return false;
  }