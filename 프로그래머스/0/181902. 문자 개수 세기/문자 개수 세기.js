function solution(my_string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    
    const alphabetNumArr = [...alphabet].fill(0)
    const capitalNumArr = [...capital].fill(0)
    
    my_string.split("").forEach(str => {
        str === str.toUpperCase() ? capitalNumArr[capital.indexOf(str)] += 1
                                  : alphabetNumArr[alphabet.indexOf(str)] += 1
    })
    
    return capitalNumArr.concat(alphabetNumArr)
}