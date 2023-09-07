function solution(names) {
    const arrs = [];
    for(let i = 0; i < names.length; i += 5) {
        arrs.push(names.slice(i, i + 5));
    }
    return arrs.map(array => array[0]);
}