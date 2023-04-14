function solution(array) {
    let cnt = new Array(Math.max(...array)+1).fill(0);
    
    for(let i = 0; i < array.length; i++){
        cnt[array[i]] += 1;       
    }
    
    if(cnt.indexOf(Math.max(...cnt)) !== cnt.lastIndexOf(Math.max(...cnt))) {
        return -1;
    }
    
    return cnt.indexOf(Math.max(...cnt));
}
