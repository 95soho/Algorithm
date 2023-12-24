function solution(array, commands) {
    return commands.map((arr) => {
        const newArr = array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)
        
        return newArr[arr[2] - 1]
    })
}