var uniqueInOrder=function(arr){
    let result = []
    let supervisor=''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== supervisor){
            supervisor = arr[i]
            result.push(supervisor)
       }
    }
    return result
}