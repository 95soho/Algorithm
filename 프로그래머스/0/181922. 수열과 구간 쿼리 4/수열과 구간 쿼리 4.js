function solution(arr, queries) {
    queries.forEach(query => {
        for(let i = query[0]; i <= query[1]; i++) {
            if(i % query[2] === 0) arr[i] = arr[i] + 1;
        }
    })
    
    return arr
}