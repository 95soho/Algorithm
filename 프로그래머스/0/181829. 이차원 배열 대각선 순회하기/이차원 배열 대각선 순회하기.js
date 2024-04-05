function solution(board, k) {
    let result = 0;
    
    board.forEach((arr, i) => {
        arr.forEach((v, j) => {
            if(i + j <= k) result += v;
        })
    })
    
    return result;
}