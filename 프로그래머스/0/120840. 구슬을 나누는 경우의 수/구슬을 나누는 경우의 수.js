function combination(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result *= n--;
        result /= i;
    }
    return result;
}

function solution(balls, share) {
    return combination(balls, share);
}