function solution(s) {
    const result = []
    s.split(" ").forEach(el => {
        if(el === "Z") result.splice(-1)
        else result.push(Number(el))
    })
        
    return result.reduce((a, b) => a + b, 0);
}