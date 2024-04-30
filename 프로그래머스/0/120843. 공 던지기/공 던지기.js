function solution(numbers, k) {
    let result;
    let num = 0;
    for(let i = 0; i < k; i++) {
        if(numbers.length <= num) {
            num = num % numbers.length
        }
        result = numbers[num]
        num += 2;
    }
    return result;
}