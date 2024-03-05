function solution(strArr) {
    let countedStrs = strArr.reduce((array, str) => {
        const length = str.length
        
        if(length in array) {
            array[length]++;
        } else {
            array[length] = 1;
        }
        return array;
    }, {})
    
    return Math.max(...Object.values(countedStrs));
}