// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// Constraints:
// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

/**
 * @param {number[][]} intervals
 * @return {number}
 * Time Complexity: O(nlogn), sort then loop through
 * Space Complexity: O(1)
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let res = 0, prev = 0;

    for (let i = 1; i < intervals.length; i++) {
        const [x, y] = intervals[i];
        const prevY = intervals[prev][1];
        // if previous interval ends after current start
        if (prevY > x) {
            // if previous interval ends after current interval, take the smaller interval
            if (prevY > y) {
                prev = i;
            }
            // either way, we remove one interval
            res++;
        }
        // previous interval ended before our current start
        else {
            prev = i
        }
    }
    return res;
};

/**
 * @param {number[][]} intervals
 * @return {number}
 * Time Complexity: O(nlogn), sort then loop through
 * Space Complexity: O(1)
 */
var eraseOverlapIntervals = function (intervals) {
    // sort by end
    intervals.sort((a, b) => a[1] - b[1]);

    // base case
    let end = intervals[0][1];
    let res = 1;

    for (let i = 1; i < intervals.length; i++) {
        // if current start after previous ends
        if (intervals[i][0] >= end) {
            // then no merge is happening
            end = intervals[i][1];
            // increase safe interval count
            res++;
        }
    }
    // total number - safe interval count
    return intervals.length - res;
};