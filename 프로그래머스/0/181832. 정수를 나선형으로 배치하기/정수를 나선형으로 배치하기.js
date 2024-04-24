function solution(n) {
    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const result = Array.from(Array(n), () => Array(n).fill(0))
    
    let x = 0, y = 0, dir = 0, num = 1;
    while(num <= n**2) {
        result[x][y] = num;
        let nextX = x + move[dir][0];
        let nextY = y + move[dir][1];
        if(nextX >= n || nextY < 0 || nextY >= n || nextY < 0 || result[nextX][nextY] !== 0) {
            dir = (dir + 1) % 4;
            nextX = x + move[dir][0];
            nextY = y + move[dir][1];
        }
        x = nextX;
        y = nextY;
        num++;
    }
    
    return result;
}