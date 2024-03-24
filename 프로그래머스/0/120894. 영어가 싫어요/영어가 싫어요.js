function solution(numbers) {
    let result = numbers;
    const alphabet = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    alphabet.forEach(el => {
        if(result.includes(el)) {
            result = result.replace(new RegExp(el, 'g'), alphabet.indexOf(el))
        }
    })
    
    return Number(result);
}
