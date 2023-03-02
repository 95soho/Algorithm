//몫 구하기
//Math.floor()를 사용할 수도 있다.
function solution(num1, num2) {
  const answer = parseInt(num1 / num2);
  return answer;
}

//두 수의 곱
function solution(num1, num2) {
  var answer = num1 * num2;
  return answer;
}

//두 수의 차
function solution(num1, num2) {
  return num1 - num2;
}
// 화살표 함수로 간단히 표현할 수도 있다
const solution = (num1, num2) => num1 - num2;
