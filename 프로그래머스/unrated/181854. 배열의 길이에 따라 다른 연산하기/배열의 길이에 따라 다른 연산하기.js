function solution(arr, n) {
    return arr.map((e, i) =>
                   arr.length % 2 
                   ? !(i % 2) ? (e + n) : e
                   : (i % 2) ? (e + n) : e
                  );
}