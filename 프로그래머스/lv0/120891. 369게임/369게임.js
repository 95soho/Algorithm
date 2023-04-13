function solution(order) {
  return order
    .toString()
    .split("")
    .map(Number)
    .filter((i) => [3, 6, 9].includes(i)).length;
}