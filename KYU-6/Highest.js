function high(x){
    let highestScore = 0
    let highestWord = ''
    let words = [...x.split(" ")];
    for (word of words) {
      let sum = 0;
      for (const letter of word) {
        sum += letter.charCodeAt(0) - 96;
      }
      if(sum > highestScore) {
          highestWord = word
          highestScore = sum
      }
    }
  
    return highestWord;
  }