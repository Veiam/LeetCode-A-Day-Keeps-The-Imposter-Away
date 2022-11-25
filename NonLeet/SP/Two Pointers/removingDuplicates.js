// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

// if we only care about count
const remove_duplicates = function (arr) {
    let p1 = 0, p2 = 1, count = 0;
    while (p2 != arr.length) {
        if (arr[p1] == arr[p2]) {
            count++;
        }
        p1++;
        p2++;
    }
    return arr.length - count;
};

function remove_duplicates(arr) {
    // index of the next non-duplicate element
    // first index will always be unique
    let nextNonDuplicate = 1;

    let i = 1;

    // loop through array
    while (i < arr.length) {
        // if current index does not matches last unique char
        // then we found next non duplicate.
        if (arr[nextNonDuplicate - 1] !== arr[i]) {
            //
            arr[nextNonDuplicate] = arr[i];
            // keep track of unique char count
            nextNonDuplicate += 1;
        }
        i += 1;
    }
    // first nextNonDuplicate length in array will contain non duplicate
    return nextNonDuplicate;
}


console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));