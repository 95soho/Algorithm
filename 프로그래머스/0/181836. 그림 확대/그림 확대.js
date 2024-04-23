function solution(picture, k) {
    const result = [];
    picture.forEach(v => {
        const arr = v.split("").map(e => e.repeat(k)).join("")
        for(let i = 0; i < k; i++) {
            result.push(arr)
        }
    })
    return result;
}