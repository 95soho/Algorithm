function solution(babbling) {
    const arr = babbling.map(e => {
        ["aya", "ye", "woo", "ma"].forEach(keyword => {
            e = e.replace(keyword, " ")
        })
        return e.trim();
    })
    
    return arr.filter(e => e === "").length;
}