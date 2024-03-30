function solution(s) {
    const result = []
    s.split(" ").forEach(el => el === "Z" ? result.splice(-1) : result.push(Number(el)))
    return result.reduce((a, b) => a + b, 0);
}