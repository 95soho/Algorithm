// 최소공약수
function getGCD (num1, num2) {
    let gcd = 1;

    for(let i = 2; i <= Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    
    return gcd;
}

// 소인수분해
function getPrimeFactors(n) {
    let arr = new Set()
    
    for(let i = 2; i <= n; i++) {
        while(n % i === 0) {
            arr.add(i)
            n /= i;
        }
    }
    
    return [...arr]
}


function solution(a, b) {
    let gcd = getGCD(a, b)
    
    b = b / gcd
    
    let arr = getPrimeFactors(b)

    if(arr.every(factor => factor === 2 || factor === 5)) return 1;
    else return 2;
}