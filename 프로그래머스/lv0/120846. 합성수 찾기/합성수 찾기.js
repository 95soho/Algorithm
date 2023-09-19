function solution(n) {
    const arr = [];
    for(let i = 1; i <= n; i++) {
        let counter = 0;
        for(let index = 1; index <= i; index++) {
            if(i % index === 0) counter += 1;
        }
        if(counter >= 3) arr.push(i)
    }
    return arr.length;
}