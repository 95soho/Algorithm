function solution(my_string, is_prefix) {
    return [...is_prefix].map((el, i) => el === my_string[i] ? 1 : 0).includes(0) ? 0 : 1;
}