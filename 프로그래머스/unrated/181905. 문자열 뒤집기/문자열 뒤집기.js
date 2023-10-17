function solution(my_string, s, e) {
    const string = my_string.slice(s, e + 1)
    const reverse = string.split("").reverse().join("")
    return my_string.replace(string, reverse);
}