function solution(slice, n) {
    var answer = 0;
    while(true){
        if(n <= 0){
            break;
        }
        n = n - slice;  //피자 못먹은 사람 수
        answer++;
    }
    return answer;
}
