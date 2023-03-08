function solution(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    const average = sum / numbers.length;
    return average;
}