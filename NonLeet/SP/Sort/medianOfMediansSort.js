// Given an unsorted array of numbers, find Kth smallest number in it.
// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

// time - O(N), space - O(N)
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

    const median = median_of_medians(nums, low, high);
    // find the median in the array and swap it with 'nums[high]' which will become our pivot
    for (i = low; i < high; i++) {
        if (nums[i] === median) {
            [nums[i], nums[high]] = [nums[high], nums[i]];
            break;
        }
    }

    const pivot = nums[high];
    for (i = low; i < high; i++) {
        // all elements less than 'pivot' will be before the index 'low'
        if (nums[i] < pivot) {
            [nums[low], nums[i]] = [nums[i], nums[low]];
            low += 1;
        }
    }
    // put the pivot at its correct place
    [nums[low], nums[high]] = [nums[high], nums[low]];
    return low;
}

function median_of_medians(nums, low, high) {
    const n = high - low + 1;
    // if we have less than 5 elements, ignore the partitioning algorithm
    if (n < 5) {
        return nums[low];
    }

    // partition the given array into chunks of 5 elements
    // for simplicity, lets ignore any partition with less than 5 elements
    const partitions = [];
    for (let i = 0; i < nums.length; i += 5) {
        if (i + 5 <= nums.length) {
            partitions.push(nums.slice(i, i + 5));
        }
    }
    // sort all partitions
    partitions.forEach((p) => {
        p.sort((a, b) => a - b);
    });

    // find median of all partitions; the median of each partition is at index '2'
    const medians = [];
    partitions.forEach((p) => {
        medians.push(p[2]);
    });

    return partition(medians, 0, medians.length - 1);
}

console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 5, 11], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 5, 11], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)