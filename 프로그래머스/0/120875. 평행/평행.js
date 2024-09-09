function solution(dots) {
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let filtered = dots.filter((v, index) => index !== i && index !== j);
            
            let [x1, y1] = dots[i];
            let [x2, y2] = dots[j];
            let [x3, y3] = filtered[0];
            let [x4, y4] = filtered[1];

            let length1 = (y2 - y1) / (x2 - x1);
            let length2 = (y4 - y3) / (x4 - x3);

            if (Math.abs(length1) === Math.abs(length2)) return 1;
        }
    }

    return 0;
}