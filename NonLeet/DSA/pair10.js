// Write a function, pair10(input), which finds and prints out a pair (any of them) of numbers that add up to 10.

function pair10 (list) {
    let i = 0, pair, map = new Map();
    while( i < list.length ) {
        pair = 10 - list[i];
        if(map.has(pair)){
            return [map.get(pair), list[i]];
        }
        else{
            map.set(list[i], list[i]);
        }
        i++;
    }
    return "There is no pair that adds up to 10.";
}

function pair10 (list) {
    let i = 0, pair, map = {};
    while( i < list.length ) {
        pair = 10 - list[i];
        if(pair in map){
            return [ map[pair], list[i]];
        }
        else{
            map[list[i]] = list[i];
        }
        i++;
    }
    return "There is no pair that adds up to 10.";
}
