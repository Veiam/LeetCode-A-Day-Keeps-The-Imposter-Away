// Given an unsorted array of numbers, find the ‘K’ largest numbers in it.
const find_k_largest_numbers = function (nums, k) {
    // max heap
    function heapify(length, index) {
        while (index < length) {
            let largest = index;
            let leftIndex = index * 2 + 1;
            let rightIndex = leftIndex + 1;

            if (leftIndex < length && nums[leftIndex] > nums[largest]) {
                largest = leftIndex;
            }

            if (rightIndex < length && nums[rightIndex] > nums[largest]) {
                largest = rightIndex;
            }

            if (largest != index) {
                [nums[index], nums[largest]] = [nums[largest], nums[index]];
            }
            else {
                break;
            }
            index = largest;
        }
    }
    // put top k numbers in front
    for (let i = 0; i < k; i++) {
        heapify(nums.length, i);
    }
    // get first k numbers
    return nums.slice(0, k);
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)
