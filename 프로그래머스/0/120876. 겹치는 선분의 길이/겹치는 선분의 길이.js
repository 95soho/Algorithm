function solution(lines) {
    let points = new Array(200).fill(0); 
    
    lines.forEach(([start, end]) => {
        for (let i = start + 100; i < end + 100; i++) {
            points[i]++;
        }
    });
    
    let result = points.filter(v => v > 1).length; // 2개 이상 겹친 부분의 길이 계산
    
    return result;
}