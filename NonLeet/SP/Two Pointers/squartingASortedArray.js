// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// middle out pointers
const make_squares = function (arr) {
    const squares = [];
    let left = 0;
    // find a first non-negative value
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            left = i;
            break;
        }
    }

    let right = left + 1;
    // loop until squares have a correct length
    while (arr.length != squares.length) {
        const rightVal = arr[right] * arr[right], leftVal = arr[left] * arr[left];
        // if rightVal is smaller or leftVal does not exist, then insert a rightVal
        if (typeof arr[left] == 'undefined' || rightVal <= leftVal) {
            squares.push(rightVal);
            right++;
        }
        // else insert a leftVal
        else {
            squares.push(leftVal);
            left--;
        }
    }

    return squares;
};

// toward middle pointers
function make_squares(arr) {
    // get length of an array and fill the square
    const n = arr.length;
    squares = Array(n).fill(0);

    // 3 indexs to keep track of
    let highestSquareIdx = n - 1, left = 0, right = n - 1;

    // if left is bigger than right, then they crossed middle
    while (left <= right) {
        const leftSquare = arr[left] * arr[left], rightSquare = arr[right] * arr[right];
        // if left is bigger than right, then insert it to the far right index that's available.
        if (leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            left += 1;
        } else {
            // else insert right square to the far right index that's available.
            squares[highestSquareIdx] = rightSquare;
            right -= 1;
        }
        highestSquareIdx -= 1;
    }

    return squares;
}


console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);