function solution(price) {
    var discount = 0;
    if(price >= 500000) {
        discount = 80;
    } else if(price >= 300000) {
        discount = 90;
    } else if(price >= 100000) {
         discount = 95;
    } else if(price < 100000) {
        return price;
    }
    return Math.floor((price * discount) / 100);
}

