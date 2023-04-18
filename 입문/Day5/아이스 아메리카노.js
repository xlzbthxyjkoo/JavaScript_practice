function solution(money) {

    if(money <= 1000000 && money > 0){
        let cups = Math.floor(money/5500);
        let change = money - (cups*5500);
        let answer = [cups, change];
        return answer;
    }
}
