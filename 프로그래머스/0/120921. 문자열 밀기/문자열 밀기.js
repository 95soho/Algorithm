function solution(A, B) {
    let result = 0;
    if(A === B) return 0;
    
    for(let i = 0; i < A.length; i++) {        
        A = A.split("").map((e, index) => {
            if(index === 0) {
                return A[A.length - 1]
            }
            return A[index -1];
        }).join("")
        
        result += 1;
        
        if(A === B) {
            return result;
            break;
        }
    }
    
    return -1;
}