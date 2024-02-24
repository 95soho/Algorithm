function solution(myString, pat) {
    let answer = 0;
    myString.split("").map((str, i) => {
        if(myString.slice(i).startsWith(pat)) answer += 1;
    })
    return answer;
}
