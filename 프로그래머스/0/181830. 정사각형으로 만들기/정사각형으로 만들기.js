function solution(arr) {
    const a = arr.length
    const b = arr[0].length
    
    if(a > b) {
        return arr.map(v => {
            for(let i = 0; i < a - b; i++) {
                v.push(0)
            }
            return v;
        })
    } 
    
    if(a < b) {
        for(let i = 0; i < b - a; i++) {
            arr.push([...Array(b)].fill(0))
        }
        return arr;
    }
    
    return arr;
}