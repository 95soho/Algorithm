function solution(n) {
    let i = 0;
    let res = 0;
    
    while (i < n) {
        res++;
        if (res % 3 === 0 || String(res).includes("3")) continue;
        i++;
    }
    
    return res;
}