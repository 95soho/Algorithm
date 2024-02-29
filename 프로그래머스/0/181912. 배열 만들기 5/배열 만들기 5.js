function solution(intStrs, k, s, l) {
    const answer = [];
    intStrs.forEach(e => {
        const str = e.slice(s, s + l)
        if(str > k) answer.push(Number(str))
    })
    return answer;
}