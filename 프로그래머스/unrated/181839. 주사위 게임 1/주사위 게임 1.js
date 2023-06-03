function solution(a, b) {
    if(a % 2 !== 0 && b % 2 !== 0) {
       return a ** 2 + b ** 2;
    }
    if(a % 2 !== 0 || b % 2 !== 0) {
        return 2 * (a + b)
    }
    return Math.abs(a - b);
}