// Given an unsorted array of numbers, find Kth smallest number in it.
// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

// time - O(NlogK), space - O(N)
function find_Kth_smallest_number(nums, k) {
    function heapify(length, i) {
        let smallest = i;
        let left = i * 2 + 1;
        let right = left + 1;
        if (left < length && nums[left] < nums[smallest]) {
            smallest = left;
        }
        if (right < length && nums[right] < nums[smallest]) {
            smallest = right;
        }
        if (smallest != i) {
            [nums[i], nums[smallest]] = [nums[smallest], nums[i]];
            heapify(length, smallest);
        }
    }

    for (let i = 0; i < k; i++) {
        heapify(nums.length, i);
    }

    return nums[k-1];
}

console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)