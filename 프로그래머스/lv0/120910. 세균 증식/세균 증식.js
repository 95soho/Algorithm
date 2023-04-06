function solution(n, t) {
    let prev_value = n;
    for (let i= 0; i < t; i++) {
        const current_value = prev_value * 2;
        prev_value = current_value;
    }
    return prev_value;
}