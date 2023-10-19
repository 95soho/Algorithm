function solution(array, n) {
    const a =  array.map(num => Math.abs(n - num))
    const min = Math.min(...a)
    const arr = a.map((num, i) => num === min && array[i]).filter(e => e)
    
    if(arr.length > 1) {
        return Math.min(...arr);
    } else {
        const index = a.findIndex(e => e === min)
        return array[index];
    }
}
