function solution(n) {
    let cnt = 1;
    
    while(n > 0) {
        if(n-7 <= 0) {
            return cnt;
        }
        else {
            cnt++;
            n -= 7;
        }
    }    
}
