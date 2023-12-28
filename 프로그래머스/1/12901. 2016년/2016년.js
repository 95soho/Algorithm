const getDateDiff = (d1, d2) => {
  const diffDate = new Date(d1).getTime() - new Date(d2).getTime();
  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
}

function solution(a, b) {
    const arr = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const diff = getDateDiff("2016-1-1", `2016-${a}-${b}`);
    const current = (parseInt(diff) % 7) % arr.length
    return arr[current];
}