function solution(a, b) {
    return Math.max(Number(a.toString() + b.toString()), Number(b.toString() + a.toString()));
}