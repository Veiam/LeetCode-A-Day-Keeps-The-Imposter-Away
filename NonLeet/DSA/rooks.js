
// Write a function, rooks_are_safe(input) which returns True if none of the rooks can attack each other.
// Input is a 2 dimensional array made up of 0 and 1 where 1 represents a rook.

function rooks_are_safe(input) {
    let i = 0, j, k, chessMap = [];
    while( i < input.length) {
        j = input[i].findIndex(
            (rook)=> rook===1 )
        if( j != -1) {
            k = input[i].findIndex(
                (rook, index)=> rook===1 && index > j);
            if( k > j ){
                return false;
            }
            else if( chessMap.contains(j) ) {
                return false;
            }
            else {
                chessMap.push(j);
            }
        }
        i++;
    }
    return true;
}

// function rooks_are_safe(input) {
//     if(input.length == 1){
//         return true;
//     }
//     else {
//         let i = 0, j, k, outerLen = input.length, chessMap = new Map();
//         while( i < outerLen) {
//             j = input[i].findIndex(
//                 (rook)=> rook===1 )
//             if( j != -1) {
//                 k = input[i].findIndex(
//                     (rook, index)=> rook===1 && index > j);
//                 if( k > j ){
//                     return false;
//                 }
//                 else if( Object.values(chessMap).includes(j) ) {
//                     return false;
//                 }
//                 else {
//                     chessMap.set(i, j);
//                 }
//             }
//             i++;
//         }
//         return true;
//     }
// }
