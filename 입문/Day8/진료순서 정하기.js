function solution(emergency) {
    //내림차순 정렬
    let array = emergency.slice().sort(function(a, b) {
        return b - a;
    });
    
    let answer = [];
    
    for(let i = 0; i < emergency.length; i++){
        for(let j = 0; j < emergency.length; j++){
            if(emergency[i] === array[j]){
                answer[i] = j+1;
            }
        }
    }   
    return answer;
}
