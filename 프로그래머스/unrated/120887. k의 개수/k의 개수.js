function solution(i, j, k) {
    let result = 0;
    for(let num = i; num <= j; num++) {
        [...String(num)].forEach(digit => {
            if(digit === String(k)) result++;
        })
    }
    return result;
}