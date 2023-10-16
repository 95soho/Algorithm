function solution(date1, date2) {
    const a = new Date(date1[0], date1[1], date1[2]);
    const b = new Date(date2[0], date2[1], date2[2]);
    
    return a < b ? 1 : 0;
}