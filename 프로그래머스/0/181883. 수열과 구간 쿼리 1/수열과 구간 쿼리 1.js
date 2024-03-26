function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        const a = queries[i][0];
        const b = queries[i][1];
        for(let j = a; j < b + 1; j++) {
            arr[j] = arr[j] + 1;
        }
    }
    
    return arr;
}