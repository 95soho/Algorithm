function solution(cipher, code) {
    return [...cipher].filter((t , i) => (i + 1) % code === 0).join("");
}