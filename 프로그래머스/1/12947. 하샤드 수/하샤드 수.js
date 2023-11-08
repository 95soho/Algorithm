function solution(x) {
    const a = String(x).split("").map(Number).reduce((a, b) => a + b);
    return x % a === 0;
}