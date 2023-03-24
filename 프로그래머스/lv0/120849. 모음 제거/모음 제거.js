function solution(my_string) {
    const search = ['a', 'e', 'i', 'o', 'u']
    var answer = [...my_string].filter(i => !search.includes(i)).join("");
    return answer;
}