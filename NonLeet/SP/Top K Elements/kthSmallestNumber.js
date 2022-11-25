// Given an unsorted array of numbers, find Kth smallest number in it.
// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.
const find_Kth_smallest_number = function (nums, k) {
    // min heap
    function heapify(length, index) {
        while (index < length) {
            let smallest = index;
            let leftIndex = index * 2 + 1;
            let rightIndex = leftIndex + 1;

            if (leftIndex < length && nums[leftIndex] < nums[smallest]) {
                smallest = leftIndex;
            }

            if (rightIndex < length && nums[rightIndex] < nums[smallest]) {
                smallest = rightIndex;
            }

            if (smallest !== index) {
                [nums[index], nums[smallest]] = [nums[smallest], nums[index]];
            }
            else {
                break;
            }

            index = smallest;
        }
    }
    // turn first k elements to smallest
    for (let i = 0; i < k; i++) {
        heapify(nums.length, i);
    }
    // account for element starting at 0 index
    return nums[k - 1];
};


console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
