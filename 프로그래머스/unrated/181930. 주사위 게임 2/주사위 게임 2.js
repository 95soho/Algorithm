function solution(a, b, c) {
    const uniq = [...new Set([a, b, c])].length;
    const sum = (num) => a ** num + b ** num + c ** num 
    
    if(uniq === 3) return sum(1)
    if(uniq === 2) return sum(1) * sum(2)
    if(uniq === 1) return sum(1) * sum(2) * sum(3)
}

