function solution(arr) {
    const a = arr.indexOf(2);
    const b = arr.lastIndexOf(2);
    if(a === -1) return [-1];
    return arr.slice(a, b + 1);
}