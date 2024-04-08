function solution(ineq, eq, n, m) {
    let answer;
    
    if(ineq === "<") {
        answer = eq === "=" ? n <= m : n < m
    } else {
        answer = eq === "=" ? n >= m : n > m
    }
    
    return answer ? 1 : 0;
}