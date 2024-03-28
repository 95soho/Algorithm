function solution(my_string) {
    let found = my_string.match(/\d+/g);
    if(!found) {
        return 0;
    } else {
        return found.map(e => Number(e)).reduce((a, b) => a + b);
    }  
}