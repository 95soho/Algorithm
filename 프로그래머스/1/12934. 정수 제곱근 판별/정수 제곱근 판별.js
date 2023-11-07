function solution(n) {
    let x = 1;
    while(x <= n) {
        if(x * x === n) {
            return (x + 1) ** 2;
            break;
        }
        x++;
    }
     return -1;
}