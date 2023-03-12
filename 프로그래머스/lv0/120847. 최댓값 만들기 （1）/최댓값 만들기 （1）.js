function solution(numbers) {
    numbers.sort(function(a,b) {
        return b-a;
    })
    const a = Math.max(...numbers);
    const b = numbers[1];
    return a * b;
}