function solution(my_string, overwrite_string, s) {
    const a = my_string.slice(0, s)
    const b = my_string.slice(overwrite_string.length + s)
    return a + overwrite_string + b;
}