
// Write a function, count_negatives(input), which finds and returns the number of negative integers in th array.

function count_negatives(input) {
    let i = 0, position =0, sum = 0;
    while( i < input.length) {
        position = input[i].findIndex(num => num > -1);
        if( position == -1){
            sum += input.length;
        }
        else{
            sum += position ;
        }
        i++;
    }
    return sum;
}
