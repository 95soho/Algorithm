function solution(myStr) {
    const myStr1 = myStr.split(/a|b|c/).filter(e => e);
    return myStr1.length > 0 ? myStr1 : ["EMPTY"];
}