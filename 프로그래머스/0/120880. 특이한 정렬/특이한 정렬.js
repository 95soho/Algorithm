function solution(numlist, n) {
    let result = []
    let arr = numlist.map(num => Math.abs(num - n))
    
    let sorted = [...arr].sort((a, b) => a - b)
    
    function getAllIndexes(arr, num) {
        let indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === num)
                indexes.push(i);
        return indexes;
    }
    
    sorted.map(num => {
        let indexes = getAllIndexes(arr, num);
        
        if(indexes.length > 1) {
            let matched = indexes.map(e => numlist[e])
            let sortedArr = matched.sort((a, b) => b - a)
            console.log(sortedArr)
            
            if(result.includes(sortedArr[0])) {
                result.push(sortedArr[1])
            } else {
                result.push(sortedArr[0])
            }
            
        } else {
            result.push(numlist[indexes])
        }
    })
    
    return result
}
