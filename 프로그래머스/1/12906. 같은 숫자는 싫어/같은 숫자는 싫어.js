function solution(arr)
{
    const answer = [];
    arr.forEach((num, i) => {
        if(arr[i] !== arr[i - 1]) answer.push(num)
    })
    
    return answer;
}