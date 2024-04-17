function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        const a = queries[i][0]
        const b = queries[i][1]
        const tmp = arr[a]
        
        arr[a] = arr[b]
        arr[b] = tmp
    }
    return arr;
}