function solution(array) {
    const a = array.slice().sort((a, b) => a - b);
    const b = Math.floor(a.length / 2);
    return a[b];
}