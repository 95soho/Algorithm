function solution(my_string) {
    var arr = Array.from(my_string.replace(/[^0-9]/g,''));
    var answer = arr.map(i => parseInt(i)).reduce((prev, curr) => prev + curr, 0)
  return answer;
}