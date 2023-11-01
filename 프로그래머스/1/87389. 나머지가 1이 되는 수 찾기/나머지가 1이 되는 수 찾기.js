function solution(n) {
    let i = 0;
    let answer = 0;
    while(i <= n) {
        if(n % i === 1) {
            return i;
        }
        i++;
    }
}