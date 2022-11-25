// You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.
// You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.
// Return an array containing the answers to the queries.

// Example 1:
// Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
// Output: [3,3,1,4]
// Explanation: The queries are processed as follows:
// - Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.
// - Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.
// - Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.
// - Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.

// Example 2:
// Input: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]
// Output: [2,-1,4,6]
// Explanation: The queries are processed as follows:
// - Query = 2: The interval [2,3] is the smallest interval containing 2. The answer is 3 - 2 + 1 = 2.
// - Query = 19: None of the intervals contain 19. The answer is -1.
// - Query = 5: The interval [2,5] is the smallest interval containing 5. The answer is 5 - 2 + 1 = 4.
// - Query = 22: The interval [20,25] is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6.

// Constraints:
// 1 <= intervals.length <= 105
// 1 <= queries.length <= 105
// intervals[i].length == 2
// 1 <= lefti <= righti <= 107
// 1 <= queries[j] <= 107
/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 * Time: O(nlogn * mlogm)
 * Space: O(n + m)
 */
var minInterval = function (intervals, queries) {
    // sort interval
    intervals.sort((a, b) => b[0] - a[0]);
    const queryOrder = {};
    // keep track of query index and sort queries
    queries.forEach((val, index) => {
        if (queryOrder[val] == null) {
            queryOrder[val] = [];
        }
        queryOrder[val].push(index);
    })
    queries.sort((a, b) => a - b);

    // minHeap
    const res = new Array(queries.length).fill(-1);
    const minHeap = new MinPriorityQueue();
    for (let query of queries) {
        // we only want to get intervals that start at or before current query
        while (intervals[intervals.length - 1]?.[0] <= query) {
            const [start, end] = intervals.pop();
            minHeap.enqueue([start, end - start + 1], end - start + 1);
        }

        // remove all the intervals that ends before the current query
        while (minHeap.front() && query >= minHeap.front().element[0] + minHeap.front().element[1]) {
            minHeap.dequeue();
        }

        // get size of query
        if (minHeap.front()) {
            const size = minHeap.front().element[1];
            for (let index of queryOrder[query]) {
                res[index] = size;
            }
        }
    }

    return res;
};