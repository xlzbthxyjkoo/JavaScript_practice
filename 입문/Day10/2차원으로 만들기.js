function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i < num_list.length;){
        let slice = [];
        for(let j =0; j < n; j++){
            slice.push(num_list[i]);  
            i++;
        }
        answer.push(slice);
    }
    return answer;
}
