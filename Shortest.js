function findShort( words) {

    const arr = [...words.split(" ")]
    let shortest= arr[0].length
    for (word of arr) {
        if (word.length < shortest){
            shortest = word.length
        }
    }
    return shortest
}