const getGCD = (num1, num2) => {
    let gcd = 1;
    for(let i = 2; i <= Math.min(num1, num2); i++) {
        if(num1 % i === 0 && num2 % i === 0) gcd = i;
    }
    return gcd;
}

function solution(n, m) {
    const lcm = getGCD(n, m);
    return [lcm, n * m / lcm];
}