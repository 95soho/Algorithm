function solution(number) {
    const num = [...number].map(Number).reduce((a, b) => a + b)
    return num % 9;
}