function boolean(num1, num2) {
    if(num1 && num2) return true;
    else if(!num1 && !num2) return false;
    else return true;
}

function solution(x1, x2, x3, x4) {
    let result1 = boolean(x1, x2);
    let result2 = boolean(x3, x4);
    
    if(result1 && result2) return true;
    else if(!result1 && !result2) return false;
    else return false;
}