function solution(n, k) {
    const drink = Math.floor(n / 10);
    return (n * 12000 + k * 2000) - (drink * 2000) ;
}