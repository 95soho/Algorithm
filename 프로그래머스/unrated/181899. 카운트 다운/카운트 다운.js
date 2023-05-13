function solution(start, end) {
    var answer = [];
    i = start;
    while(i >= end) {
        answer.push(i)
        i --;
    }
    return answer;
}