function solution(start, finish) {
    let d = finish - start
    return Math.floor(d / 3) + d % 3
}