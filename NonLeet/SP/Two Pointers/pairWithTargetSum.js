// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
const pair_with_targetsum = function (arr, target_sum) {
  let p1 = 0, p2 = arr.length - 1;
  let curSum = arr[p1] + arr[p2];
  while (curSum != target_sum) {
    // If the sum of the two numbers pointed by the two pointers is greater than the target sum,
    // this means that we need a pair with a smaller sum.
    // So, to try more pairs, we can decrement the end-pointer.
    if (curSum > target_sum) {
      p2--;
    }
    // If the sum of the two numbers pointed by the two pointers is smaller than the target sum,
    // this means that we need a pair with a larger sum. So, to try more pairs, we can increment the start-pointer.
    else {
      p1++;
    }
    curSum = arr[p1] + arr[p2];

  }
  return [p1, p2];
}

// Instead of using a two-pointer or a binary search approach, we can utilize a HashTable to search for the required pair.
function pair_with_target_sum(arr, targetSum) {
  const nums = {}; // to store numbers and their indices
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (targetSum - num in nums) {
      return [nums[targetSum - num], i];
    }
    nums[arr[i]] = i;
  }
  return [-1, -1];
}


console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));