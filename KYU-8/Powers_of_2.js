const powersOfTwo = (num)=>{
    let result = [1]
    let product = 1
    for (let i = 1; i <= num; i++) {
        product *= 2   
        result.push(product)
    }
    return result
}
