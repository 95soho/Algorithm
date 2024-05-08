function solution(score) {
    let arr = score.map(v => (v[0] + v[1]) / 2)
    let result = [...arr]
    for(let i = 0; i < arr.length; i++) {
        const max = Math.max(...arr)
        let index = arr.map((e, i) => e === max ? i : "").filter(v => v !== "")
        
        result = result.map((e, j) => index.includes(j) ? i + 1 : e)
        arr = arr.map(e => e === max ? null : e)
        
        if(index.length > 1) {
            i += index.length - 1
        }
    }
    return result;
}