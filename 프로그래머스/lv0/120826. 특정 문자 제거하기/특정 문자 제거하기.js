function solution(my_string, letter) {
    var answer = [...my_string].filter(i => i !== letter).join("");
    return answer;
}