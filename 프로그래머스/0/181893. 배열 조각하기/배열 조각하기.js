function solution(arr, query) {
    query.forEach((v, i) => {
        if(i % 2 === 0) {
            arr = arr.slice(0, v + 1)
        } else {
            arr = arr.slice(v)
        }
    })
    
    return arr;
}