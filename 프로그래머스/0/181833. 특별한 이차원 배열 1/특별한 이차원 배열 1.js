function solution(n) {
    const answer = [];
    for(let i = 0; i < n; i++) {
        const arr = new Array(n - 1).fill(0);
        const newArr = arr.splice(i, 0, 1);
        answer.push(arr)
    }
    return answer;
}

