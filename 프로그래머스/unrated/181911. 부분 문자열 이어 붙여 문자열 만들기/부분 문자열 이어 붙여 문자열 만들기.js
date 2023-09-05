function solution(my_strings, parts) {
    const arr = my_strings.map((str, i) => {
        const [startIndex, endIndex] = parts[i];
        return str.substring(startIndex, endIndex + 1);
    });
    return arr.join("");
}