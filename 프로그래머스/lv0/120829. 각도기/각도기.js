//내가 한 풀이
function solution(angle) {
    if (angle > 0 && angle < 90) {
        return 1
    } else if (angle === 90) {
        return 2
    } else if (90 < angle && angle < 180) {
        return 3
    } else if (angle === 180) {
        return 4
    }
}

//switch 문을 사용한 다른 좋은 풀이
function solution(angle) {
    switch(angle) {
        case 90: return 2;
        case 180: return 4;
        default:
            return angle > 0 && angle < 90 ? 1 : 3;
    }
}
