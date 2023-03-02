//숫자 비교하기
function solution(num1, num2) {
  if (num1 != num2) {
    return -1;
  } else {
    return 1;
  }
}

// 이렇게 간단한 방법이 있는데...!
function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}

// '==' 와 '==='의 차이
// '==' 연산자를 이용하여 서로 다른 유형의 두 변수의 [값] 비교
// '==='는 엄격한 비교를 하는 것으로 알려져 있다([값 & 자료형] -> true)
