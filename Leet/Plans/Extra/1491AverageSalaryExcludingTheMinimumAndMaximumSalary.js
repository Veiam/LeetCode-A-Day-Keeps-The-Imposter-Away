/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

Example 1:
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Example 2:
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

Constraints:
3 <= salary.length <= 100
1000 <= salary[i] <= 106
All the integers of salary are unique.
*/
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    // set initial values
    let max = 999, min = 1000001, sum = 0;
    for (let i = 0; i < salary.length; i++) {
        const cur = salary[i];
        // see if we have a new max
        max = Math.max(cur, max);
        // see if we have a new min
        min = Math.min(cur, min);
        // add it to sum
        sum += cur;
    }
    // remove max and min salaries from the average calculation
    return (sum - max - min) / (salary.length - 2);
};