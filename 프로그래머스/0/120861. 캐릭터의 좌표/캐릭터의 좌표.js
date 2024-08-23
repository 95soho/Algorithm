function solution(keyinput, board) {
    let result = [0, 0]
    let rangeX = (board[0] - 1) / 2
    let rangeY = (board[1] - 1) / 2
    
    keyinput.map((key) => {
        if(key === "left") result[0] = result[0] - 1;
        if(key === "right") result[0] = result[0] + 1;
        if(key === "up") result[1] = result[1] + 1;
        if(key === "down") result[1] = result[1] - 1;
                
        if (result[0] > rangeX) {
            result[0] = rangeX
        } else if (result[0] < -rangeX) {
            result[0] = -rangeX
        }

        if (result[1] > rangeY) {
            result[1] = rangeY
        } else if (result[1] < -rangeY) {
            result[1] = -rangeY;
        }
    })
    
    return result
}