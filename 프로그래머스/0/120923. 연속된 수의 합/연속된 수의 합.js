function solution(num, total) {
    // 시작되는 숫자 계산
    let start = Math.ceil(total / num) - Math.floor(num / 2);

    // start부터 num개의 연속된 숫자를 배열에 추가
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(start + i);
    }
    
    return arr;
}