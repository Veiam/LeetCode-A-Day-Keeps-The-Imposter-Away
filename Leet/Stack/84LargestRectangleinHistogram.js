// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// Input: heights = [2,4]
// Output: 4

/**
 * @param {number[]} heights
 * @return {number}
 * Time Complexity: O(n), we iterate each index twice at max
 * Space Complexity: O(n), stack size
 */
var largestRectangleArea = function (heights) {
    let largestArea = 0;
    let stack = [];

    // loop through
    for (let i = 0; i < heights.length; i++) {
        let start = i;

        // if stack is not empty and most recent height is taller than current height
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            // get the last index and height
            let [lastI, lastH] = stack.pop();
            // calculate largest area
            largestArea = Math.max(largestArea, lastH * (i - lastI));
            // we can start from last index with current height
            start = lastI;
        }

        stack.push([start, heights[i]]);
    }

    // take care of remainings in stack
    for (let j = 0; j < stack.length; j++) {
        let currArea = stack[j][1] * (heights.length - stack[j][0]);
        largestArea = Math.max(largestArea, currArea);
    }

    return largestArea;
};