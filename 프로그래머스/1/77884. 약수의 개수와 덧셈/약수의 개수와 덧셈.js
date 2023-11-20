function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++){
        let arr = []
        for(divisor = 1; divisor <= i; divisor++) {
            if(i % divisor === 0) {
                arr.push(divisor)
            }
        }
        answer += (arr.length % 2 === 0) ? i : -i;
    }
    return answer;
}