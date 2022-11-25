// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Time Complexity: O(nlog), sort then loop through
 * Space Complexity: O(n)
 */
var merge = function (intervals) {
    // sort by start
    intervals.sort((a, b) => a[0] - b[0]);

    let res = [];
    let [prevX, prevY] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [x, y] = intervals[i];
        // if the previous interval ends between current interval
        if (prevY >= x && prevY <= y) {
            prevY = Math.max(prevY, y);
        }
        // if the previous interval ends before current interval
        else if (prevY < x) {
            res.push([prevX, prevY]);
            [prevX, prevY] = intervals[i];
        }
    }
    res.push([prevX, prevY]);
    return res;
};