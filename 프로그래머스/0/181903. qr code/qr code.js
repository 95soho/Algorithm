function solution(q, r, code) {
    return code.split("").map((el, index) => index % q === r ? el : null).join("")
}