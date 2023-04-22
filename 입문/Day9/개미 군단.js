function solution(hp) {
    let i = Math.floor(hp / 5);
    let j = Math.floor((hp-(i*5)) / 3);
    let k = hp - (j*3) - (i*5);
    
    return i+j+k;
}
