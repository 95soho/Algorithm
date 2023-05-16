function solution(num_list) {
    return num_list.sort((a,b) => a - b).filter((e, i) => i > 4);
}