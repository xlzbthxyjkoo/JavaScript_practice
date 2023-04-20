function solution(n, k) {
    let total = 0;
    let free = 0;
    
    if(n >= 10) {
        free = Math.floor(n/10);
        if(k >= free){
            k -= free;
        }
        else{
            k = 0;
        }
    }
    
    total = (n*12000) + (k*2000);
    return total;
}
