function solution(spell, dic) {
    const filtered = dic.filter(v => v.length === spell.length);
    
    let i = 0;
    while(i < filtered.length) {
        let arr = [...spell];
        filtered[i].split("").forEach(e => {
            if(arr.includes(e)) {
                arr = arr.filter((_, i) => i !== arr.indexOf(e))
            }
        })
        if(arr.length === 0) return 1;
        
        i++
    }
    
    return 2;
}