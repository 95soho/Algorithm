function solution(arr) {
    const arrays = [arr];
    let i = 1;
    
    while (true) {
        let prevArray = arrays[i - 1];
        let newArray = prevArray.map(num => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            if (num < 50 && num % 2 !== 0) return num * 2 + 1;
            return num;
        });
        
        let isEqual = true;
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] !== prevArray[j]) {
                isEqual = false;
                break;
            }
        }
        
        if (isEqual) return i - 1;
        
        arrays.push(newArray);
        i++;
    }
}