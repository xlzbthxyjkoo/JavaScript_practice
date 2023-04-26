function solution(box, n) {
    let row = 0;
    let col = 0;
    let h = 0;
    
    while(true){
        if(n * row > box[0]) {
            row = row - 1;
            break;
        }
        else if(n*row == box[0]) {
            break;
        }
        row++;
    }
    
    while(true){
        if(n * col > box[1]) {
            col -= 1;
            break;
        }
        else if(n*col == box[1]) {
            break;
        }
        col++;
    }
    
    while(true){
        if(n * h > box[2]) {
            h -= 1;
            break;
        }
        else if(n*h == box[2]) {
            break;
        }
        h++;
    }
    
    return row*col*h;
}
