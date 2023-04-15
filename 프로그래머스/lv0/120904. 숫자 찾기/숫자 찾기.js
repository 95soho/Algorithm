function solution(num, k) {
    num = num.toString().split("")
    const a = num.find((n, index) => n === k.toString());
    return a === undefined ? -1 : (num.indexOf(a)) + 1;
}