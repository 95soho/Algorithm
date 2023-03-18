function solution(num_list) {
    const a = (num_list.filter(i => i % 2 == 0)).length;
    const b = (num_list.filter(i => i % 2 !== 0)).length;
    return [a,b];
}