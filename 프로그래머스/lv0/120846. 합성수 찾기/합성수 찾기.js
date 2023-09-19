function find(i) {
    let counter = 0;
    for(let index = 1; index <= i; index++) {
            if(i % index === 0) counter += 1;
        }
    return counter;
}

function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        if(find(i) >= 3) answer++;
    }
    return answer;
}