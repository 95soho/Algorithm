function solution(arr) {
    const result = [...arr];
    
    while (result.length & (result.length - 1)) {
        result.push(0);
    }
    
    return result;
}