// Given an array arr of unsorted numbers and a target sum, count all triplets in it such
// that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
// Write a function to return the count of such triplets.
const triplet_with_smaller_sum = function (arr, target) {
    let count = 0;
    arr.sort((a, b) => a - b);

    for (let index = 0; index < arr.length - 2; index++) {
        let start = index + 1,
            end = arr.length - 1;
        while (start < end) {
            sum = target - arr[index] - arr[start] - arr[end];
            // it's too big, we need to decrease the sum..
            if (sum <= 0) {
                end--;
            } else {
                // if the current triplets sum is smaller than the target
                // then it means, any end index below it with current index and start are also smaller
                count += end - start;
                start++;
            }
        }
    }

    return count;
};

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

// Write a function to return the list of all such triplets instead of the count.
const triplet_with_smaller_sum = function (arr, target) {
    let res = [];
    arr.sort((a, b) => a - b);

    for (let index = 0; index < arr.length - 2; index++) {
        let start = index + 1,
            end = arr.length - 1;
        while (start < end) {
            sum = target - arr[index] - arr[start] - arr[end];
            // it's too big, we need to decrease the sum..
            if (sum <= 0) {
                end--;
            } else {
                // if the current triplets sum is smaller than the target
                // then it means, any end index below it with current index and start are also smaller
                let c = 0;
                while (end - c > start) {
                    res.push(arr[index], arr[start], arr[end - c]);
                    c++;
                }
                start++;
            }
        }
    }

    return res;
};
