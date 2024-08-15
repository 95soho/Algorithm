function solution(array) {
    let obj = {};

    array.forEach(num => {
        obj[num] = (obj[num] || 0) + 1;
    });

    const max = Math.max(...Object.values(obj));
    const count = Object.values(obj).filter(x => x === max).length;
    const result = Object.keys(obj).find(key => obj[key] === max);

    return count > 1 ? -1 : +result;
}