function solution(board) {
    const n = board.length;
    let result = 0;
    
    // 지뢰의 인접한 좌표를 계산하기 위한 방향 배열 (8방향: 위, 아래, 좌, 우, 대각선)
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],  // 위쪽 3칸
        [0, -1],         [0, 1],      // 좌우 2칸
        [1, -1], [1, 0], [1, 1]       // 아래쪽 3칸
    ];

    // 위험지역 표시
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                // 지뢰가 있는 곳 주변 8방향에 위험지역 표시
                directions.forEach(([dx, dy]) => {
                    const newX = i + dx;
                    const newY = j + dy;
                    if (newX >= 0 && newX < n && newY >= 0 && newY < n && board[newX][newY] === 0) {
                        board[newX][newY] = -1;  // 위험지역을 -1로 표시
                    }
                });
            }
        }
    }

    // 안전한 지역의 칸수 구하기
    board.forEach(row => {
        row.forEach(v => {
            if (v === 0) result++;
        });
    });

    return result;
}