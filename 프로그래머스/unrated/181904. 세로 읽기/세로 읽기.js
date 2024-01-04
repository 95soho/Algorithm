function solution(my_string, m, c) {
    let arr = [];
    let list = [];

    [...my_string].map(str => {
        list.push(str);
        if(list.length === m) {
            arr.push(list);
            list = [];
        }
    })
    
    return arr.map(e => e[c - 1]).join("");
}