function solution(n) {
    var arr = (n + '').split('');
    var answer = arr.map(i => parseInt(i)).reduce((prev, curr) => prev + curr, 0)
    return answer;
}