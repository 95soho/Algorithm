function solution(str1, str2) {
    var answer = str1.search(str2) === -1 ? 2 : 1;
    return answer;
}