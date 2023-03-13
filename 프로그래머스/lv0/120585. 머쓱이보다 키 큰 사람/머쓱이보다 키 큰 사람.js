function solution(array, height) {
    const answer = array.filter(it => it > height);
    return answer.length;
}