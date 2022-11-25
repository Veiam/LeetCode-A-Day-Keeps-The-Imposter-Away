// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. Find the two numbers that appear only once.
function find_single_numbers(nums) {
    // get the XOR of the all the numbers
    let n1xn2 = 0;
    // Taking XOR of all numbers in the given array will give us XOR of num1 and num2, calling this XOR as n1xn2.
    nums.forEach((num) => {
        n1xn2 ^= num;
    });

    // get the rightmost bit that is '1'
    let rightmost_set_bit = 1;
    // Find any bit which is set in n1xn2. We can take the rightmost bit which is ‘1’. Let’s call this rightmostSetBit.
    while ((rightmost_set_bit & n1xn2) === 0) {
        rightmost_set_bit = rightmost_set_bit << 1;
    }
    let num1 = 0, num2 = 0;
    // Iterate through all numbers of the input array to partition them into two groups based on rightmostSetBit.
    nums.forEach((num) => {
        // Take XOR of all numbers in both the groups separately. Both these XORs are our required numbers.
        if ((num & rightmost_set_bit) !== 0) // the bit is set
            num1 ^= num;
        else // the bit is not set
            num2 ^= num;
    });
    return [num1, num2];
}

console.log(`Single numbers are: ${find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])}`);
console.log(`Single numbers are: ${find_single_numbers([2, 1, 3, 2])}`);