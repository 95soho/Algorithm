function solution(s) {
    const strArr = s.split(" ")
    const answer = strArr.map((str) => {
        return [...str].map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join("")
    })
    return answer.join(" ");
}