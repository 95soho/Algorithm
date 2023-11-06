function solution(n) {
    const arr = Array.from(String(n)).map(Number)
    const a = arr.sort((a, b) => b - a).join("")
    return +a;
}