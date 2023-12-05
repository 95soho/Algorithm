const matched = {zero : 0, one : 1, two : 2, three : 3, four : 4, five : 5, six : 6, seven : 7, eight : 8, nine : 9}

function solution(s) {
    let answer = [];
    let arr = "";
    
    s.split("").forEach((str) => {
        if(Object.keys(matched).includes(arr)) {
            answer.push(matched[arr])
            arr = "";
        }
        
        if(Number(str) >= 0) {
            answer.push(Number(str))
        } else {
            arr += str;
        }

    });

    arr && answer.push(matched[arr])
    return Number(answer.map(String).join(''));
}