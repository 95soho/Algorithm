function solution(age) {
    const agearr = String(age).split("");
    const newarr = "abcdefghij";
    return agearr.map(n => newarr[n]).join("");
}