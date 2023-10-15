function solution(before, after) {
    for(let i = 0; i < before.length; i++) {
        if(!after.includes(before[i])) {
            after = 0;
            break;
        }
        after = after.replace(before[i], "");
    }
    return after === 0 ? 0 : 1;
}