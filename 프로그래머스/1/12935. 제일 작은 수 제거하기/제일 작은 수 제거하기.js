function solution(arr) {
    const min = Math.min(...arr)
    const minIndex = arr.findIndex(num => num === min)
    const answer = arr.filter((v, i) => i !== minIndex)
    
    return answer.length !== 0 ? answer : [-1];
}

    