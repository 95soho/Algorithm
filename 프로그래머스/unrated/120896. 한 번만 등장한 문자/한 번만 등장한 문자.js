function solution(s) {
    const arr = [...new Set([...s].filter((item, index) => [...s].indexOf(item) !== index))];
    return [...s].filter(str => !arr.includes(str)).sort().join("");
}


