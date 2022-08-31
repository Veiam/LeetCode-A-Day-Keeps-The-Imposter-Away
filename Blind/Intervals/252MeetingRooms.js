// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: true

// Constraints:
// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti < endi <= 106

/**
 * @param {number[][]} intervals
 * @return {boolean}
 * Time Complexity: O(nlogn), sort then loop through
 * Space Complexity: O(1), constant space
 */
var canAttendMeetings = function (intervals) {
    // sort by start time
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    // loop through
    for (let i = 1; i < intervals.length; i++) {
        // if previous end time is after current start time then we can't attend
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }

    return true;
};