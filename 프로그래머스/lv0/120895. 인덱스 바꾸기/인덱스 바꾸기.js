function solution(my_string, num1, num2) {
    let arr = my_string.split("")
    return arr.map((n, index) => index === num1 ? arr[num2] : index === num2 ? arr[num1] : n).join("");
}