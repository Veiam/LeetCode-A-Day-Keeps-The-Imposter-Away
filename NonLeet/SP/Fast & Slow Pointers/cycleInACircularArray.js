// We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index.
// Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices.
// You should assume that the array is circular which means two things:
// If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
// If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
// Write a method to determine if the array has a cycle. The cycle should have more than one element and
// should follow one direction which means the cycle should not contain both forward and backward movements.

function circular_array_loop_exists(arr) {
    for (i = 0; i < arr.length; i++) {
        // first index will determine the direction
        isForward = arr[i] >= 0;
        let slow = i, fast = i;


        // if slow or fast becomes '-1' this means we can't find cycle for this number
        while (true) {
            // move one step for slow pointer
            slow = find_next_idnex(arr, isForward, slow);
            // move one step for fast pointer
            fast = find_next_idnex(arr, isForward, fast);

            // if we have not reached the dead end
            if (fast !== -1) {
                // move anoter step for the fast pointer
                fast = find_next_idnex(arr, isForward, fast);
            }
            // we either reached the dead end or found a cycle
            if (slow === -1 || fast === -1 || slow === fast) {
                break;
            }
        }
    }

    // there's a cycle if slow and fast are equal
    // slow should have never reached dead end before fast
    if (slow !== - 1 && slow === fast) {
        return true;
    }

    return false;
}

function find_next_index(arr, isForward, currentIndex) {
    // determine the current direction
    direction = arr[currentIndex] >= 0;

    // if the current direction does not match intial direciton
    if (isForward !== direction) {
        return -1;
    }

    // if it goes over the length, then we need to strat from 0 index
    nextIndex = (currentIndex + arr[currentIndex]) % arr.length;

    if (nextIndex < 0) {
        nextIndex += arr.length; // wrap around for negative numbers
    }

    // one element cycle, return -1
    if (nextIndex === currentIndex) {
        nextIndex = -1
    }

    return nextIndex;
}

console.log(circular_array_loop_exists([1, 2, -1, 2, 2]));
console.log(circular_array_loop_exists([2, 2, -1, 2]));
console.log(circular_array_loop_exists([2, 1, -1, -2]));

console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`)
console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`)
console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`)
