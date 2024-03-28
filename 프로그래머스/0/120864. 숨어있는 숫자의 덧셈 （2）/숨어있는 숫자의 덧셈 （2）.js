function solution(my_string) {
    let found = my_string.match(/\d+/g);
    if(!found) {
        return 0;
    } else {
        return found.reduce((a, b) => a + Number(b), 0);
    }  
}