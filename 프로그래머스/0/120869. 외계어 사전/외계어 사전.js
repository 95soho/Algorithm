function solution(spell, dic) {
    return dic.some(word => {
        let arr = [...spell];
        return word.split("").every(e => {
            if(arr.includes(e)) {
                arr = arr.filter((_, i) => i !== arr.indexOf(e));
                return true;
            }
            return false;
        }) && arr.length === 0;
    }) ? 1 : 2;
}