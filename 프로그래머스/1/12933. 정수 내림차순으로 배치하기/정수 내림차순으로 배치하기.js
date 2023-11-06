function solution(n) {
    const arr = Array.from(String(n)).map(Number)
    return parseInt(arr.sort((a, b) => b - a).join(""));
}