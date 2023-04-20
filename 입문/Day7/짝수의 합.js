function solution(n) {
    let sum = 0;
    if(n%2===0){
        while(n >= 0){
            sum += n;
            n -= 2;
        }
    }
    else if(n%2!==0){
        n -= 1;
        while(n >= 0){
            sum += n;
            n -= 2;
        }
    }
    return sum;
}
