function solution(arr, n) {
    return arr.map((num, i) => 
                   arr.length % 2 !== i % 2 
                   ? num + n 
                   : num);
}