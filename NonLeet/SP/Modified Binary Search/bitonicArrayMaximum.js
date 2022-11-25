// Find the maximum value in a given Bitonic array.
// An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
// Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

const find_max_in_bitonic_array = function (arr) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
      mid = Math.floor(start + (end - start) / 2);
      // If arr[middle] > arr[middle + 1], we are in the second (descending) part of the bitonic array.
      // Therefore, our required number could either be pointed out by middle or will be before middle.
      if (arr[mid] > arr[mid + 1]) {
        end = mid;
      }
      // If arr[middle] < arr[middle + 1], we are in the first (ascending) part of the bitonic array.
      // Therefore, the required number will be after middle.
      else {
        start = mid + 1;
      }
    }
  
    // at the end of the while loop, 'start === end'
    return arr[start];
  }
  
  
  console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]));
  console.log(find_max_in_bitonic_array([3, 8, 3, 1]));
  console.log(find_max_in_bitonic_array([1, 3, 8, 12]));
  console.log(find_max_in_bitonic_array([10, 9, 8]));
  