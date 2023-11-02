function solution(s){
    const matchedNum = (str) => {
        return s.toLowerCase().split(str).length - 1
    }

    return matchedNum("p") === matchedNum("y") ? true : false;
}