function solution(arr, k) {
    const arrSet = [...new Set(arr)];
    while (arrSet.length < k) {
        arrSet.push(-1);
    }
    
    if(arrSet.length >= k) {
        return arrSet.slice(0, k)
    }
}