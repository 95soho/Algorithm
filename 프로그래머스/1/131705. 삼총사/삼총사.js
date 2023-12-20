function getCombinations(arr, N) {
    const results = [];
    if (N === 1) return arr.map((value) => [value]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, N - 1);
        const attached = combinations.map((combination) => [fixed, ...combination])
        results.push(...attached)
    })
    
    return results;
}


function solution(number) {
    const arrays = getCombinations(number, 3)
    return arrays.map(arr => arr.reduce((a, b) => a + b)).filter(arr => arr === 0).length
}

