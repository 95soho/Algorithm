function solution(a, b, c, d) {
    const arr = [a, b, c, d].sort()
    const group = [];
    
    // arr 그룹화
    arr.forEach((e, index) => {
        if(e !== arr[index - 1]) {
            group.push([e])
        } else {
            const findIndex = group.findIndex((arr) => arr.includes(e))
            group[findIndex].push(e)
        }
    })
    
    // 네 주사위 숫자 동일
    if(group.every(e => e.length === 4)) return 1111 * a;
    
    // 세 주사위
    if(group.some(e => e.length === 3)) {
        let p;
        let q;
        group.forEach(e => {
            if(e.length === 1) q = e[0];
            if(e.length === 3) p = e[0];
        })
        
        return (10 * p + q) ** 2;
    }
    
    // 두 주사위 두 개씩 같은 값
    if(group.every(e => e.length === 2)) {
        let p = group[0][0];
        let q = group[1][0];
        return (p + q) * Math.abs(p - q)
    }
    
    // 두 주사위
    if(group.filter(e => e.length === 2).length === 1) {
        return group.filter(e => e.length !== 2).reduce((a, b) => +a * +b)
    }
    
    // 모두 다름
    if(group.every(e => e.length === 1)) {
        return Math.min(group[0], group[1], group[2], group[3])
    } 
}