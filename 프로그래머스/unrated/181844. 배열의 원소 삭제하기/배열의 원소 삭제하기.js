function solution(arr, delete_list) {
    return arr.filter((e, i) => !delete_list.includes(e));
}