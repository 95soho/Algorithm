function solution(n) {
    let pizza = 0;
    
    for(i = 1; i <= 100; i++) {
        const multiple = i * 6;
        
        if (multiple % n === 0) {
            pizza = multiple;
            break;
        }
    }
    return pizza / 6;
}