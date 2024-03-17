function solution(numLog) {
    const count = {1 : "w", "-1" : "s", 10 : "d", "-10" : "a"};
    let result = "";
    numLog.forEach((num, i) => {
        const diff = numLog[i + 1] - numLog[i];
        if(diff) result += count[diff];
    })
    return result;
}