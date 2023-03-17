function solution(array, n) {
    var answer = array.filter(it => it === n);
    return answer.length;
}