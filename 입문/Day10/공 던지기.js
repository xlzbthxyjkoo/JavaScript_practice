function solution(numbers, k) {
    //공을 가지고 있는 사람
    let ball = 1;
    
    for(let i = 0; i < k-1; i++){
        ball += 2; 
        if(ball > numbers.length){
            ball -= numbers.length;
        }
    }
    return ball;
}
