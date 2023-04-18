function solution(age) {
    var answer = 0;
    let i = 22-age;
    if(i >= 0) {
        answer = 2022 - age + 1;
    }
    else if(i < 0) {
        answer = 2000 + i + 1;
    }
    return answer;
}
