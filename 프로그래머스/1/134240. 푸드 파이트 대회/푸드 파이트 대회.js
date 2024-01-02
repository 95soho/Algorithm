function solution(food) {
    let result = "";
    food.map((num, i) => {
        if(i > 0) {
            result += String(i).repeat(num / 2)
        }
    })
    const reverse = result.split("").reverse("").join("");
    return result + "0" + reverse;
}