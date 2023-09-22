function solution(myString) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...myString].map(e => alphabet.indexOf(e) < 12 ? "l" : e).join("");
}