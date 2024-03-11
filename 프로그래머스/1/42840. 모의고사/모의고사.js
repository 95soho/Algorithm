function solution(answers) {
    const students = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    let sum = [0, 0, 0]
    const answer = [];
    
    for(let i = 0; i < answers.length; i++) {
        for(let j = 0; j < students.length; j++) {
            if(answers[i] === students[j][i % students[j].length]) {
                sum[j] = sum[j] + 1;
            }
        }
    }
    
    sum.forEach((e, i) => {
        e === Math.max(...sum) && answer.push(i + 1)
    })
    
    return answer;
}
