function solution(sizes) {
    const width = sizes.map((size) => size[0]).sort((a, b) => b - a)
    const length = sizes.map((size) => size[1]).sort((a, b) => b - a)
    
    const newSize = sizes.map(size => 
                              size.sort((a, b) => width[0] > length[0]) 
                              ? size.sort((a, b) => b - a)[1] 
                              : size.sort((a, b) => a - b)[0])
                                    .sort((a, b) => b - a)[0]
    
    return (width[0] > length[0] ? width[0] : length[0]) * newSize;
}
