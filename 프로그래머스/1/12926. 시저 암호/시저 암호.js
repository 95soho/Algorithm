function solution(s, n) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return s.split("").map(str => {
        if(str === " ") {
            return " "
        } 
        if(str === str.toUpperCase()) {
            const index = alphabet.indexOf(str.toLowerCase()) + n
            if(index > 25) {
                return alphabet[index % 26].toUpperCase();
            } else {
                return alphabet[index].toUpperCase();
            }
        } else {
            const index = alphabet.indexOf(str) + n
            if(index > 25) {
                return alphabet[index % 26];
            } else {
                return alphabet[index];
            }
        }
    }).join("")
}