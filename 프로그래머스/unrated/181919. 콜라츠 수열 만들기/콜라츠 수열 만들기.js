function solution(n) {
    const answer = [];
    let x = n;
    
    while(x !== 1) {
        x = x % 2 === 0 ? x / 2 : 3 * x + 1
        answer.push(x)
    }
    
    return [n, ...answer];
}