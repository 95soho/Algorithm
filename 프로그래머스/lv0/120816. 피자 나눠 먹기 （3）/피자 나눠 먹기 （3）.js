function solution(slice, n) {
    return (n % slice == 0) ? parseInt(n / slice) : parseInt(n / slice) + 1;
}