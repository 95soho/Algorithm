function solution(price, money, count) {
    let priceAmount = 0;
    for(let i = 1; i <= count; i++) {
        priceAmount += price * i
    }
    
    return priceAmount > money ? priceAmount - money : 0;
}