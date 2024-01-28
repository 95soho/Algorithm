function solution(my_string, queries) {
    let answer = my_string;
    queries.map(e => {
        const str = answer.slice(e[0], e[1] + 1)
        const reversed = str.split("").reverse().join("")
        answer = answer.slice(0, e[0]) + reversed + answer.slice(e[1] + 1)
    })
    return answer;
}