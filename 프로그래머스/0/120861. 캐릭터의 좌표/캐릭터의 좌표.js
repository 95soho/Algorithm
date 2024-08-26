function solution(keyinput, board) {
    let res = [0, 0]
    let rangeX = (board[0] - 1) / 2
    let rangeY = (board[1] - 1) / 2
    
    for (let k of keyinput) {
        switch(k){
            case 'left': if (-res[0] < rangeX) res[0]--; break;
            case 'right': if (res[0] < rangeX) res[0]++; break;
            case 'up': if (res[1] < rangeY) res[1]++; break;
            case 'down': if (-res[1] < rangeY) res[1]--; break;
        }
    }
    return res;
}