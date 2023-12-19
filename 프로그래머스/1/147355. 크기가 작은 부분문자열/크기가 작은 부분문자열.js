function solution(t, p) {
    const arr = [];

    t.split("").map((str, index) => {
        let num = t.slice(index, index + p.length)
        if(num.length === p.length) {
            arr.push(Number(num))
        }
    })
    return arr.filter(num => num <= Number(p)).length;
}

