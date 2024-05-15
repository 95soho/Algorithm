function solution(chicken) {
    let service = 0;
    let coupon = 0;
    
    while(chicken > 0) {
        service += Math.floor(chicken / 10)
        coupon += chicken % 10
        chicken = Math.floor(chicken / 10)
        
        if(coupon >= 10) {
            service += Math.floor(coupon / 10);
            chicken += Math.floor(coupon / 10);
            coupon = coupon % 10;
        }
    }
    return service;
}