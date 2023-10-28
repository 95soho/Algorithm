const factory = (n) => {
    let sum = 1;
    for(let i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;
}


function solution(n) {
    let arr = [];
    let i = 1;
    while (factory(i) <= n) { 
        arr.push(factory(i));
        i++;
    }
    return arr.length;
}