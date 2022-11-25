// Given an array of unsorted numbers and a target number,
// find all unique quadruplets in it, whose sum is equal to the target number.

function search_quadruplets(arr, target) {
  // sort the array in ascending order
  arr.sort((a, b) => a - b)
  const quadruplets = [];
  // iterator for the first index
  for (let i = 0; i < arr.length - 3; i++) {
    // skip same element to avoid duplicate quadruplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    // iterator for the second index
    for (let j = i + 1; j < arr.length - 2; j++) {
      // skip same element to avoid duplicate quadruplets
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}


function search_pairs(arr, targetSum, first, second, quadruplets) {
  // initialize left to 1 + 2nd element, right to last index
  let left = second + 1,
    right = arr.length - 1;
  // while two pointers haven't met
  while ((left < right)) {
    // get the sum of first, second, left, right
    sum = arr[first] + arr[second] + arr[left] + arr[right];
    // found the quadruplet
    if (sum === targetSum) {
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      // we increase the left and right since neither can no longer be summed up to target
      left += 1;
      right -= 1;
      // check to see if the left val did not change
      while ((left < right && arr[left] === arr[left - 1])) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }
      // check to see if the right val did not change
      while ((left < right && arr[right] === arr[right + 1])) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    }
    // sum is smaller than target sum 
    else if (sum < targetSum) {
      left += 1; // we need a pair with a bigger sum
    }
    // sum is bigger than target sum
    else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}


console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));