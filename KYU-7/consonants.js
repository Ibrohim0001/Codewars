function consonantCount(str) {
    let vowels = "bcdfghjklmnpqrstvwxyz";
   let result = 0;
   for (let i = 0; i < str.length; i++) {
     if (vowels.includes(str[i].toLowerCase())) {
       result += 1;
     }
   }
   return result
 }