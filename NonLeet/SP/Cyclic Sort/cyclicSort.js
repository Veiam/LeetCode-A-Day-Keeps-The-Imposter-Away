// We are given an array containing n objects. Each object, when created, was assigned a unique number
// from the range 1 to n based on their creation sequence.
// This means that the object with sequence number 3 was created just before the object with sequence number 4.
//Write a function to sort the objects in-place on their creation sequence number in O(n) and without using any extra space.
// For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.
const cyclic_sort = function (nums) {
    let i = 0;
    while (i < nums.length) {
        const num = nums[i] - 1;
        if (num != i) {
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
        else {
            i++;
        }
    }
    return nums;
}

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)