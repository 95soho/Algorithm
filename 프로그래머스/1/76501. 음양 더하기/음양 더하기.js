function solution(absolutes, signs) {
    return absolutes.map((num, i) => signs[i] ? num : -num).reduce((a, b) => a + b);
}