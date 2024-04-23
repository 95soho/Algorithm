function solution(arr, queries) {
    const result = [];
    
    for(let [s, e, k] of queries) {
        let filtered = [];
        
        for(let i = s; i <= e; i++) {
            if(k < arr[i]) filtered.push(arr[i])
        }
        
        result.push(filtered.length !== 0 ? Math.min(...filtered) : -1)
    }
    
    return result
}