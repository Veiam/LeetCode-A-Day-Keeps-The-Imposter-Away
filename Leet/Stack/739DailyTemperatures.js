// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// Constraints:
// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 * Time and space complexity: O(n), we iterate through and keep temperatures in stack
 */
var dailyTemperatures = function (temperatures) {
    let stack = [[temperatures[0], 0]];
    let res = new Array(temperatures.length).fill(0);
    for (let i = 1; i < temperatures.length; i++) {
        let temp = temperatures[i];
        // while we have prev temps and its temp is lower than current temp
        while (stack.length && stack[stack.length - 1][0] < temp) {
            // set the answer to current day - prev day
            res[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
            // pop it
            stack.pop();
        }
        // push the new temp
        stack.push([temp, i]);
    }
    return res;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 * Time complexity: O(n), we iterate through temps
 * Space complexity: O(1), constant space
 */
var dailyTemperatures = function (temperatures) {
    let len = temperatures.length;
    let hottest = temperatures[len - 1];
    let res = new Array(len).fill(0);
    for (let cur = len - 2; cur >= 0; cur--) {
        let temp = temperatures[cur];
        // moving from back, if it's the new hottest then it will be 0
        if (temp >= hottest) {
            hottest = temp;
            continue;
        }

        let days = 1;
        // if the next day is less than or equal to current temp
        // find a next warmer day until we can find a warmer day then current day
        while (temperatures[cur + days] <= temp) {
            days += res[cur + days];
        }
        res[cur] = days;

    }
    return res;
};