// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

// Example 1:
// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation: 
// We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.

// Example 2:
// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18

// Constraints:
// 1 <= points.length <= 1000
// -106 <= xi, yi <= 106
// All pairs (xi, yi) are distinct.
/**
 * Prim's algorithm
 * @param {number[][]} points
 * @return {number}
 * Time: O(n^2 * logn), there can be n^2 edges and each enqueue and dequeue takes logn
 * Space: O(n^2), store edges
 */
var minCostConnectPoints = function (points) {
    let sum = 0;;
    const visit = new Set();
    const frontier = new MinPriorityQueue();
    let start = 0;
    // minimum spanning tree
    while (visit.size !== points.length) {
        for (i = 0; i < points.length; i++) {
            // if we visited this node already then move on
            if (visit.has(i)) {
                continue;
            }
            // if not calculate the distance and add to the frontier
            const distance = Math.abs(points[start][0] - points[i][0]) + Math.abs(points[start][1] - points[i][1]);
            frontier.enqueue([distance, i], distance);
        }

        // remove all frontier that has been visited
        while (visit.has(frontier.front().element[1])) {
            frontier.dequeue();
        }
        // get the min edge and add to the sum
        const [distance, point] = frontier.dequeue().element;
        visit.add(point);
        start = point;
        sum += distance;
    }
    return sum;
};
