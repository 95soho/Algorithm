function solution(arr, flag) {
    let x = [];
    flag.forEach((e, index) => {
        const num = arr[index];
        if (e) {
            for (let i = 0; i < num * 2; i++) {
                x.push(num);
            }
        } else {
            x = x.slice(0, x.length - num);
        }
    });
    return x;
}
