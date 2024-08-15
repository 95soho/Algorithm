function solution(array) {
    let obj = {}
        
    array.forEach(num => {
        obj[String(num)] ? obj[String(num)] += 1 : obj[String(num)] = 1;
    })
    
    const arr = Object.values(obj);
    const max = Math.max(...arr);
    const count = arr.filter(x => x === max).length;
    const result = Object.keys(obj).find(key => obj[key] === max);
    
    return count > 1 ? -1 : +result;
}

