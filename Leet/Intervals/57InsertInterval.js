// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Constraints:
// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let res = [];

    // add all intervals starting before the new interval
    while (intervals[0] && intervals[0][1] < start) {
        res.push(intervals.shift());
    }

    // check if there is anything left to merge
    if (intervals[0]) {
        // if new interval starts between the interval
        if (start >= intervals[0][0] && start <= intervals[0][1]) {
            start = Math.min(start, intervals[0][0]);
        }
        while (intervals[0]) {
            const [x, y] = intervals.shift();
            // if new interval ends between the interval
            if (end >= x && end <= y) {
                end = Math.max(end, y);
                res.push([start, end]);
                break;
            }
            // if merged interval ends before the new interval
            else if (end < x) {
                res.push([start, end], [x, y]);
                break;
            }
            // if nothing is left to merge
            else if (!intervals[0]) {
                res.push([start, end]);
                break;
            }
        }
    }
    // if nothing is left to merge then add new interval
    else {
        res.push([start, end]);
    }


    // if there is more left in intervals, add to the resF
    if (intervals[0]) {
        res.push(...intervals);
    }

    return res;

};