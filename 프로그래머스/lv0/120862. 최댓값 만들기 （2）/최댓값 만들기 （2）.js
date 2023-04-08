function solution(numbers) {
    const minus = numbers.filter(n => n < 0);
    const newarr = numbers.sort((a,b)=>b-a);
    const a = minus[0] * minus[1];
    const b = newarr[0] * newarr[1];
    return a > b ? a : b;
}