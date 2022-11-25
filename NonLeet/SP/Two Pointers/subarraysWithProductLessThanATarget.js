// Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.
// return num of arrays
function find_subarrays(arr, target) {
    let prod = 1, ans = 0, left = 0;
    for (let right = 0; right < arr.length; right++) {
        prod *= arr[right];
        // if product goes over the target
        // then divide it by the left val
        while (prod >= target) {
            prod /= arr[left++];
        }

        ans += right - left + 1;
    }
    return ans;
};

// print out actual arrays
function find_subarrays(arr, target) {
    let product = 1,
        left = 0;
    for (right = 0; right < arr.length; right++) {
        product *= arr[right];
        while ((product >= target && left < arr.length)) {
            product /= arr[left];
            left += 1;
        }
        // since the product of all numbers from left to right is less than the target therefore,
        // all subarrays from left to right will have a product less than the target too; to avoid
        // duplicates, we will start with a subarray containing only arr[right] and then extend it
        const tempList = [];
        for (let i = right; i > left - 1; i--) {
            tempList.unshift(arr[i]);
            console.log(tempList);
        }
    }
}


console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));