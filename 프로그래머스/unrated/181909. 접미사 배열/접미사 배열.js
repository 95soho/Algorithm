function solution(my_string) {
    let newarr = [];
    for(let i = 1; i <= my_string.length; i++) {
        newarr.push(my_string.slice(-i))
    }
    return newarr.sort();
}