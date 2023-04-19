function solution(my_string, n) {
    let array = my_string.split("");
    let answer = [];
    
    for(let i = 0; i < array.length; i++){
        answer.push(array[i].repeat(n));
    }
    
    return answer.join("");
}
