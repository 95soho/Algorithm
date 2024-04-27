function solution(n) {
    const result = []
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            let num = 0;
            for(let j = 1; j <= i; j++) {
                if(i % j === 0) num += 1;
            }
            if(num === 2) result.push(i)
        }
    }
    return result.length !== 0 ? result : [n];
}