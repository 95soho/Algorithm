function solution(my_string, indices) {
    return [...my_string].filter((_, index) => !indices.includes(index)).join("");
}