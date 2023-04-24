function solution(numbers, direction) {
    //unshift: 맨앞에 추가 pop:맨뒤 제거
    //push: 맨뒤에 추가 shift:맨앞 제거
    if(direction === "right"){
        numbers.unshift(numbers.pop());
    }
    else {
        numbers.push(numbers.shift());
    }
    return numbers;
}
