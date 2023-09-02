function solution(arr1, arr2) {
    const sum1 = arr1.reduce((a, b) => a + b);
    const sum2 = arr2.reduce((a, b) => a + b);
    
    if(arr1.length < arr2.length) return -1;
    if(arr1.length === arr2.length) {
        if(sum1 === sum2) return 0;
        if(sum1 < sum2) return -1;
        return 1;
    };
    return 1;
}