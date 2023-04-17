function solution(numbers, direction) {
    let left = numbers.filter((n, index) => index !== 0);
    let right = numbers.filter((n, index) => index !== numbers.length-1);
    return direction === "left" ? [...left, numbers[0]] : [numbers[numbers.length-1], ...right];
}