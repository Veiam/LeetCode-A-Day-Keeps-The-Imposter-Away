// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible,
// return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

function triplet_sum_close_to_target(arr, targetSum) {
    // sort the numbers in ascending order;
    arr.sort((a, b) => a - b);

    let smallest_difference = Infinity;
    // loop until we can't get triplet
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;

        while (left < right) {
            // calculate the difference between triplelet sum and target sum
            const target_diff = targetSum - arr[i] - arr[left] - arr[right];
            // we've found a triplet with an exact sum
            if (target_diff === 0) {
                // return sum of all the numbers
                return targetSum;
            }

            // We will save the difference between the triplet and the target number if it's lower than current smallest.
            if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
                // save the closest difference
                smallest_difference = target_diff;
            }
            // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
            if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
                (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
                // target_diff > smallest_difference allows allows to make sure if there are two closest index
                // we take the one that is smaller
                smallest_difference = target_diff; // save the closest and the biggest difference
            }


            if (target_diff > 0) {
                left += 1; // we need a triplet with a bigger sum
            } else {
                right -= 1; // we need a triplet with a smaller sum
            }
        }
    }
    return targetSum - smallest_difference;
}


console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));