function solution(n, control) {
    const arr = [...control].map((e) => {
        if(e === "w") return 1;
        if(e === "s") return -1;
        if(e === "d") return 10;
        if(e === "a") return -10;
        return e;
    });
    
    return arr.reduce((a, b) => {
        return a + b;
	}, n);
}