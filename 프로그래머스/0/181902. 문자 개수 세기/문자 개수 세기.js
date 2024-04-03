function solution(my_string) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
    const alphabetNumArr = [...alphabet].fill(0)
    
    my_string.split("").forEach(str => alphabetNumArr[alphabet.indexOf(str)] += 1)
    
    return alphabetNumArr;
}