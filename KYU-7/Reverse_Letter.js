function reverseLetter(user) {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
   let result = ''
      for (let i = 0; i < user.length; i++) {
       if( letters.includes(user[i])){
           result= result + user[i]
       }
       
      }
      return result.split("").reverse().join("")
   }