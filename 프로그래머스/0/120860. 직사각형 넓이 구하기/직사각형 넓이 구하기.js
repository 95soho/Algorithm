function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    const maxX = Math.max(x1, x2, x3, x4)
    const minX = Math.min(x1, x2, x3, x4)
    const maxY = Math.max(y1, y2, y3, y4)
    const minY = Math.min(y1, y2, y3, y4)
    
    return (maxX - minX) * (maxY - minY);
}