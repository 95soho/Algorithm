function solution(d, budget) {
    let index = 0;
    let answer = 0;
    d = d.sort((a, b) => a - b)
    
    while (d[index] <= budget) {
        budget = budget - d[index]
        answer = index + 1;
        index++;
    }
    return answer;
}