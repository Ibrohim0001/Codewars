function invert(numbers) {
    for (let n = 0; n<numbers.length; n++){
         numbers[n] >= 0 ? numbers[n] = (-Math.abs(numbers[n])) : (numbers[n] = Math.abs(numbers[n]))
     }
     return numbers 
 }