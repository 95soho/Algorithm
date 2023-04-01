function solution(rsp) {
    var answer = [...rsp].map(i => i == 2 ? 0 : i == 0 ? 5 : 2).join("")
    return answer;
}