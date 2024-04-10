function solution(rank, attendance) {
    const result = []
    const arr = [...rank].sort((a, b) => a - b)
    
    for(let i = 0; i < arr.length; i++) {
        const index = rank.indexOf(arr[i])
        attendance[index] === true && result.push(index)
        if(result.length === 3) break;
    }
    
    return 10000 * result[0] + 100 * result[1] + result[2];
}