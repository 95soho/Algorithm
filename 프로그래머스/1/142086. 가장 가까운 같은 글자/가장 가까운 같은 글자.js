function solution(s) {
    s = s.split("")
    return s.map((str, index) => {
        let arr = []
        for(let i = 0; i < index; i++) {
            s[i] === str && arr.push(i)
        }
        return arr.length === 0 ? -1 : index - arr[arr.length -1];
    })
}