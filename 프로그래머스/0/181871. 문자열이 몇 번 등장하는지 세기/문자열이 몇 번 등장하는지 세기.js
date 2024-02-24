function solution(myString, pat) {
    let answer = 0;
    myString.split("").map((str, i) => {
        if(myString.slice(i, i + pat.length) === pat) answer += 1;
    })
    return answer;
}
