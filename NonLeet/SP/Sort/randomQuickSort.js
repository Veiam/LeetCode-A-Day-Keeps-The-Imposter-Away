// Given an unsorted array of numbers, find Kth smallest number in it.
// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

// time - O(N^2), space - O(N)
function find_Kth_smallest_number(nums, k) {
    function find_Kth_smallest_number_rec(start, end) {
        const p = partition(nums, start, end);

        if (p === k - 1) {
            return nums[p];
        }
        // If pivot’s position is larger than K-1, we will recursively partition the array on numbers lower than the pivot.
        if (p > k - 1) { // search lower part
            return find_Kth_smallest_number_rec(start, p - 1);
        }
        // If pivot’s position is smaller than K-1, we will recursively partition the array on numbers greater than the pivot.
        // search higher part
        return find_Kth_smallest_number_rec(p + 1, end);
    }
    return find_Kth_smallest_number_rec(0, nums.length - 1);
}

function partition(nums, low, high) {
    if (low === high) {
        return low;
    }
    // picks a number called pivot and partition the input array around it.
    const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    [nums[pivotIndex], nums[high]] = [nums[high], nums[pivotIndex]];

    const pivot = nums[high];

    for (i = low; i < high; i++) {
        // all elements less than 'pivot' will be before the index 'low'
        if (nums[i] < pivot) {
            [nums[low], nums[i]] = [nums[i], nums[low]];
            low += 1;
        }
    }

    // put the pivot in its correct place
    [nums[low], nums[high]] = [nums[high], nums[low]];
    return low;
}

console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 5, 11], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 5, 11], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)