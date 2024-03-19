function solution(order) {
    return order.map((el) => {
        return el.includes("cafelatte") ? 5000 : 4500
    }).reduce((a, b) => a + b);
}