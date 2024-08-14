function solution(quiz) {
    return quiz.map(array => {
        const [a, b, c, d, e] = array.split(" ")
        const result = b === "-" ? +a - +c : +a + +c
        return result === +e ? "O" : "X"
    })
}