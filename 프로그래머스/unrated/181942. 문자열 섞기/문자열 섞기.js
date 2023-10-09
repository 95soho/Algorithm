function solution(str1, str2) {
    let arr = []
    for(let i = 0; i < str1.length; i++) {
        arr.push(str1[i])
        arr.push(str2[i])
    }
    return arr.join("");
}

