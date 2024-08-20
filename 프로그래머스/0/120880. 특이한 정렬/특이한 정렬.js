function solution(numlist, n) {
    let result = [];
    let arr = numlist.map(num => Math.abs(num - n));
    let sorted = [...arr].sort((a, b) => a - b);
    
    function getAllIndexes(arr, num) {
        let indexes = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                indexes.push(i);
            }
        }
        return indexes;
    }
    
    sorted.forEach(num => {
        let indexes = getAllIndexes(arr, num);
        
        if (indexes.length > 1) {
            let matched = indexes.map(e => numlist[e]);
            let sortedArr = matched.sort((a, b) => b - a);
            
            for (let i = 0; i < sortedArr.length; i++) {
                if (!result.includes(sortedArr[i])) {
                    result.push(sortedArr[i]);
                    break;
                }
            }
            
        } else {
            result.push(numlist[indexes[0]]);
        }
    });
    
    return result;
}