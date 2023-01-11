var hotpo = function(n){
    let count = 0
    while (n > 1){
        count++
        n % 2 == 0 ? (n /=2) : ( n = n * 3 + 1)   
    }
    return count;
}