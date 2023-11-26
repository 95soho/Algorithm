function solution(arr1, arr2) {
    const answer = []
    
    arr1.map((e, index) => {
        const el = []
        
        for(let i = 0; i < e.length; i++) {
            el.push(arr1[index][i] + arr2[index][i])
        }
        
        answer.push(el)
    })
    
    return answer
}