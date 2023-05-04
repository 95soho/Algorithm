function solution(rny_string) {
    return [...rny_string].map(e => e === "m" ? "rn" : e).join("");
}