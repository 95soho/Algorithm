function solution(box, n) {
    const newarr = box.map(i => Math.floor(i / n));
    const answer = newarr.reduce((acc, cur) => acc * cur);
    return answer;
}
