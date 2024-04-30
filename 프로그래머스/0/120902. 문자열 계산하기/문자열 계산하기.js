function solution(my_string) {
    const arr = my_string.split(" ")
    let result = Number(arr[0]);
    for(let i = 2; i < arr.length; i+= 2) {
        if(arr[i - 1] === "+") result += Number(arr[i])
        else result -= Number(arr[i])
    }
    return result;
}