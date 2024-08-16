function solution(common) {
    const a = common[1] - common[0];
    const b = common[2] - common[1];  
    
    if (a === b) { // 공차가 일정하면 등차수열
        return common[common.length - 1] + a;
    } else { // 공차가 일정하지 않으면 등비수열
        const r = common[1] / common[0]; // 공비를 계산
        return common[common.length - 1] * r;
    }
}