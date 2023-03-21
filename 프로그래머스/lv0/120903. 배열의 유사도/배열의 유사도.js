function solution(s1, s2) {
    var answer = s1.filter(it => s2.includes(it)).length;
    return answer;
}