function squareDigits(num){
    let result = ''
    num = num.toString()
    for (let i = 0; i < num.length; i++) {
        result += num[i] ** 2
        
    }
    return +result
}