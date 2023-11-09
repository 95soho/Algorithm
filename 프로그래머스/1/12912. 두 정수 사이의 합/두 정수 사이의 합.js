function solution(a, b) {
    a > b ? [min, max] = [b, a] : [min, max] = [a, b]
    
    let answer = 0;
    for(i = min; i <= max; i++) {
        answer += i
    }
    
    return answer;
}