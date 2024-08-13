function solution(A, B) {
    if(A === B) return 0;
    
    for(let i = 0; i < A.length; i++) {        
        A = A.split("").map((e, index) => {
            return index === 0 ? A[A.length - 1] : A[index -1]
        }).join("")
        if(A === B) return i + 1;
    }
    return -1;
}