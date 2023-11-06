function solution(n) {
    const arr = Array.from(String(n)).map(Number);
    return arr.reduce((a, b) => a + b);
}
