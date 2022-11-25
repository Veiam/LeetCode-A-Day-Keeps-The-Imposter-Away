// Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.
// You can assume that the array can have duplicates.

function count_rotations(arr) {
    let start = 0;
    end = arr.length - 1;
    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);
        // if element at mid is greater than the next element
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }
        // if element at mid is smaller than the previous element
        if (mid > start && arr[mid - 1] > arr[mid]) {
            return mid;
        }

        // if numbers at indices start, mid, and end are same, we can't choose a side
        // the best we can do is to skip one number from both ends if they are not the smallest number
        if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
            if (arr[start] > arr[start + 1]) { // if element at start+1 is not the smallest
                return start + 1;
            }
            start++;
            if (arr[end - 1] > arr[end]) { // if the element at end is not the smallest
                return end;
            }
            end--;
        } // left side is sorted, so the pivot is on right side
        else if (arr[start] < arr[mid] || (arr[start] == arr[mid] && arr[mid] > arr[end])) {
            start = mid + 1;
        } else { // right side is sorted, so the pivot is on the left side
            end = mid - 1;
        }
    }


    return 0; // the array has not been rotated
}


console.log(count_rotations_with_duplicates([3, 3, 7, 3]));