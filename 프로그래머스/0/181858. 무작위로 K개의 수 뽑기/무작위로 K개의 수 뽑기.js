function solution(arr, k) {
    const arrSet = [...new Set(arr)];
    while (arrSet.length < k) {
        arrSet.push(-1);
    }
    
    return arrSet.slice(0, k)
}