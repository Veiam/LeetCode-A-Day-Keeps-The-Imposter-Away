// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2

// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: 1

// Constraints:
// 1 <= intervals.length <= 104
// 0 <= starti < endi <= 106

/**
 * @param {number[][]} intervals
 * @return {number}
 * Time Complexity: O(nlogn), sort then loop through
 * Space Complexity: O(n), store start and end times
 */
var minMeetingRooms = function (intervals) {
    let startTimes = [], endTimes = [];

    for (let interval of intervals) {
        startTimes.push(interval[0]);
        endTimes.push(interval[1]);
    }

    // chronogically sort start times and end times
    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);

    let rooms = 0, end = 0;
    for (let i = 0; i < startTimes.length; i++) {
        // if no meetings ended before this start, we need more room
        if (startTimes[i] < endTimes[end]) {
            rooms++;
        }
        // else we can reuse the room
        else {
            end++;
        }
    }

    return rooms;
};