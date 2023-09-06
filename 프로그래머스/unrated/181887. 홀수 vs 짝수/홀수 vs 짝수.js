function solution(num_list) {
    const odd = num_list.filter((n, i) => i % 2 === 0).reduce((a, b) => a + b);
    const even = num_list.filter((n, i) => i % 2 !== 0).reduce((a, b) => a + b);
    return Math.max(odd, even);
}