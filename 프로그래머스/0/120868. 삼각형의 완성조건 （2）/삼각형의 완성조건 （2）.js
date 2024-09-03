function solution(sides) {
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let start = max - min + 1
    
    const count = max - start + 1;
    const count2 = (max + min - 1) - max

    return count + count2
}
