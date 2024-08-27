function solution(polynomial) {
    let a = 0;
    let b = 0;
        
    polynomial.split(" ").forEach(str => {
        if(str.includes("x")) {
            const num = str[0] === "x" ? 1 : parseInt(str.replace("x", ""));
            a += num;
        } else if(!isNaN(str)) b += parseInt(str)
    })
    
    const aStr = a === 1 ? "x" : a > 1 ? `${a}x` : "";
    const bStr = b ? `${b}` : "";

    return [aStr, bStr].filter(Boolean).join(" + ");
}