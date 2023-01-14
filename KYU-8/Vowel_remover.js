function shortcut (string) {
    let unli = 'aeiou'
    let result = ''
    for (let i = 0; i< string.length; i++) {
        
        if ((unli.includes(string[i])) === false){
          result  += string[i] 
          }
      }
    return result
  }