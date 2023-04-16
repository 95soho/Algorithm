function solution(n) {
    let index = 1;
    let arr = [];
    while (index <= n) {
        if(n % index === 0) {
            arr.push(index)
        }
        index += 1;
    }
    return arr;
}