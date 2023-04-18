function solution(my_string) {
    return [...my_string].map((t) => t.toLowerCase()).sort().join("");
}

