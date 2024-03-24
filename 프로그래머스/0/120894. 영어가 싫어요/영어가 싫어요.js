function solution(numbers) {
    const alphabet = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    alphabet.forEach(el => {
        if(numbers.includes(el)) {
            numbers = numbers.replace(new RegExp(el, 'g'), alphabet.indexOf(el))
        }
    })
    
    return Number(numbers);
}
