function solution(n) {
    let sum = 0;
    const isEven = n % 2 === 0;
    
    for(let i = isEven ? 2 : 1; i <= n; i += 2) {
         sum += isEven ? i ** 2 : i;
    }
    return sum;
}