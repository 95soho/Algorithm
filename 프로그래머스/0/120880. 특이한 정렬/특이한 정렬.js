function solution(numlist, n) {
    let arr = numlist.map(num => Math.abs(num - n));
    
    let result = [];
    let usedIndexes = new Set();
    
    while(result.length < numlist.length) {
        let minDiff = Math.min(...arr);
        let indexes = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === minDiff && !usedIndexes.has(i)) {
                indexes.push(i);
            }
        }
        
        if(indexes.length > 1) {
            let matched = indexes.map(e => numlist[e]);
            let max = Math.max(...matched);

            result.push(max);
            
            
            let maxIndex = numlist.indexOf(max);
            usedIndexes.add(maxIndex);
        } else {
            let index = indexes[0];
            result.push(numlist[index]);
            
            
            usedIndexes.add(index);
        }
        
        
        arr = arr.map((val, i) => usedIndexes.has(i) ? Infinity : val);
    }
    
    return result;
}