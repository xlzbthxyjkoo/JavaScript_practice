function solution(my_string, letter) {
    let array = my_string.split("");
    for(let i = 0; i <= array.length; i++) {
        if(array[i] === letter) {
            array.splice(i, 1);
            i--; //splice 실행하면 즉시 배열의 길이가 변경되기 때문에
        }
    }
    return array.join("");
}
