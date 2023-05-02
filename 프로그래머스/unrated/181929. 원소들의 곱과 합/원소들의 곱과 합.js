function solution(num_list) {
    const a = num_list.reduce((a, b) => a * b);
    const b = (num_list.reduce((a, b) => a + b) ** 2)
    return a < b ? 1 : 0;
}