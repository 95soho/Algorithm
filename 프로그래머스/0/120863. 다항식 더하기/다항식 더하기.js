function solution(polynomial) {
    let a = 0;
    let b = 0;
    
    if(polynomial.split(" ").length === 1) return polynomial;
    
    polynomial.split(" ").forEach(str => {
        if(str.includes("x")) {
            str[0] === "x" ? a++ : a += +str.slice(0, str.length - 1)
        }
        if(Number.isInteger(+str)) b += +str
    })
    
    if(!a) return b.toString();
    if(!b) return a + "x";
    if(a === 1) return "x" + " " + "+" + " " + b;
    
    return a + "x" + " " + "+" + " " + b;
}