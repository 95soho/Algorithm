function solution(hp) {
    const a = Math.floor(hp / 5);
    const b = Math.floor((hp - (a * 5)) / 3);
    const c = Math.floor(hp - ((a * 5) + (b * 3)) / 1);
    return a + b + c;
}