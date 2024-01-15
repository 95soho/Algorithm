function solution(numbers) {
    const answer = [];
    numbers.map((e, index) => {
        for(i = index; i < numbers.length - 1; i++) {
            const el = numbers[index] + numbers[i + 1]
            if(!answer.includes(el)) answer.push(el)
        }
    })
    return answer.sort((a, b) => a - b);
}