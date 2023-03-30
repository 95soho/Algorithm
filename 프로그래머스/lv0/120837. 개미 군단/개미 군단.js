function solution(hp) {
    const a = Math.floor(hp / 5);
    const b = Math.floor((hp % 5) / 3);
    const c = (hp % 5) % 3 === 0 ? 0 : Math.floor(((hp % 5) % 3) / 1);
    var answer = a + b + c;
    return answer;
}