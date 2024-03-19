function solution(order) {
    return order.map((el) => {
        if(el === "anything") return 4500
        return el.includes("americano") ? 4500 : 5000
    }).reduce((a, b) => a + b);
}