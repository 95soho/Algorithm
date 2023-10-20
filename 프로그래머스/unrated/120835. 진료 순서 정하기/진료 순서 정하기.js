function solution(emergency) {
    const order = [...emergency].sort((a, b) => b - a)
    return emergency.map(num => order.findIndex(e => e === num) + 1);
}