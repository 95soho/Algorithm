function solution(num_list) {
    return num_list.map((num) => {
        let answer = 0;
        let n = num;
        
        while(n !== 1) {
            if(n % 2 === 0) {
                n = n / 2;
            } else {
                n = (n - 1) / 2;
            }
            answer ++;    
        }
        
        return answer;
        
    }).reduce((a, b) => a + b)
}