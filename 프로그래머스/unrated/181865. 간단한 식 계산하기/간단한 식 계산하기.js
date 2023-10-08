function solution(binomial) {
    [a, op, b] = binomial.split(" ");
    if(op === "+") return Number(a) + Number(b);
    if(op === "-") return a - b;
    if(op === "*") return a * b;
}