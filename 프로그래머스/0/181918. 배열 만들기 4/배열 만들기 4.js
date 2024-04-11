function solution(arr) {
    const stk = []
    let i = 0;
    
    while(i < arr.length) {
        if(stk.length !== 0) {
            if(stk[stk.length - 1] < arr[i]) {
                stk.push(arr[i])
                i++;
            } else {
                stk.pop();
                i;
            }
        } else {
            stk.push(arr[i])
            i++;
        }
    }
    
    return stk;
}
