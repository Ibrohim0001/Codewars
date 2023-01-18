function moveZeros(nums) {
    let zeros = nums.filter(zero=>{
        return zero === 0 
    })
    let nonZeros = nums.filter(zero=>{
       return zero !== 0
    })
    return nonZeros.concat(zeros)
    }