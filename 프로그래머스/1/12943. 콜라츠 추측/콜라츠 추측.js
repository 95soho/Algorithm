function solution(num) {
    if(num === 1) return 0;
    
    let sum = 0;

    while(num !== 1) {
        num = (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
        sum = sum + 1;
        
        if(sum > 500) {
            return -1;
            break;
        }
    }
    return sum;
}