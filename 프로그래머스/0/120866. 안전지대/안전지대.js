function solution(board) {
    let arr = []
    let result = 0;
    
    // 지뢰 자표 구하기
    board.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if(value === 1) {
                arr.push([rowIndex, colIndex])
            }
        })
    })
        
    // 위험지역 표시
    arr.forEach((array) => {
        let [x, y] = array
        
        board.forEach((row, rowIndex) => {
            if(rowIndex >= x - 1 && rowIndex <= x + 1) {
                row.forEach((value, colIndex) => {
                    if(colIndex >= y - 1 && colIndex <= y + 1) {
                        board[rowIndex][colIndex] = 1
                    }
                })
            }
        }) 
    })
    
    // 안전한 지역의 칸수 구하기
    board.forEach(row => {
        row.forEach(v => v === 0 && result++)
    })
    
    return result
}