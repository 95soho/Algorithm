function solution(name, yearning, photo) {
    let matched = {}
    name.forEach((e, i) => matched[e] = yearning[i])
    
    return photo.map(arr => {
        return arr.map(e => !matched[e] ? 0 : matched[e]).reduce((a, b) => a + b)
    })
}

