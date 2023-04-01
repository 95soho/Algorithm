function solution(my_string) {
    return [...my_string].map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join("");;
}