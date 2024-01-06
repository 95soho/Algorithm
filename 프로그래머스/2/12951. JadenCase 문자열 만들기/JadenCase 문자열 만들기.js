function solution(s) {
    const findIndex = [...s].map((str, index) => str === " " ? index + 1 : null)
                            .filter(e => e)
    const result = [...s].map((str, i) => 
                              findIndex.includes(i) || i === 0 
                              ? str.toUpperCase() 
                              : str.toLowerCase())
    return result.join("");
}