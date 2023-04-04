function solution(my_string) {
    const answer = [...my_string].map(Number).filter(i => !isNaN(i)).sort((a,b)=>a-b);
    return answer;
}