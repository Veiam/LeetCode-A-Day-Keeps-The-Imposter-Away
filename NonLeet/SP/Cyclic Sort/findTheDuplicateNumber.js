// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
// The array has only one duplicate but it can be repeated multiple times.
// Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

const find_duplicate = function (nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i];
        if (j == i + 1) {
            i++;
        }
        else {
            // we only care about putting the number into the right place
            if (nums[j - 1] != nums[i]) {
                [nums[j - 1], nums[i]] = [nums[i], nums[j - 1]];
                i++;
            }
            // if the number alreadye exists in the place, then we found a duplicate;
            else {
                return j;
            }
        }
    }
    return -1
};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));

const find_duplicate = function (nums) {
    let slow = arr[0], fast = arr[arr[0]];
    // the start of the cycle will always point to the duplicate number
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[arr[fast]];
    }

    // find cycle length
    let current = arr[arr[slow]];
    let cycleLength = 1;
    // the array will have a cycle due to the duplicate number and that 
    while (current !== arr[slow]) {
        current = arr[current];
        cycleLength++;
    }

    return find_start(arr, cycleLength);
}

function find_start(arr, cycleLength) {
    let pointer1 = arr[0];
    let pointer2 = arr[0];
    // move pointer2 ahead 'cycleLength' steps
    while (cycleLength > 0) {
        pointer2 = arr[pointer2];
        cycleLength--;
    }
    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
        pointer1 = arr[pointer1];
        pointer2 = arr[pointer2];
    }
    return pointer;
}

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));