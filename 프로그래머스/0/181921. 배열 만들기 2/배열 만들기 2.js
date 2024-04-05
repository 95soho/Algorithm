function solution(l, r) {
    const result = [];
    for(let i = l; i <= r; i++) {
        const isIncluded = (e) => ["0", "5"].includes(e)
        if(i.toString().split("").every(isIncluded)) result.push(i)
    }
    return result.length > 0 ? result : [-1];
}