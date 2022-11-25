// You are given a stream of points on the X-Y plane. Design an algorithm that:
// Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points.
// Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.
// An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.
// Implement the DetectSquares class:
// DetectSquares() Initializes the object with an empty data structure.
// void add(int[] point) Adds a new point point = [x, y] to the data structure.
// int count(int[] point) Counts the number of ways to form axis-aligned squares with point point = [x, y] as described above.

// Example 1:
// Input
// ["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
// [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]
// Output
// [null, null, null, null, 1, 0, null, 2]
// Explanation
// DetectSquares detectSquares = new DetectSquares();
// detectSquares.add([3, 10]);
// detectSquares.add([11, 2]);
// detectSquares.add([3, 2]);
// detectSquares.count([11, 10]); // return 1. You can choose:
//                                //   - The first, second, and third points
// detectSquares.count([14, 8]);  // return 0. The query point cannot form a square with any points in the data structure.
// detectSquares.add([11, 2]);    // Adding duplicate points is allowed.
// detectSquares.count([11, 10]); // return 2. You can choose:
//                                //   - The first, second, and third points
//                                //   - The first, third, and fourth points

// Constraints:
// point.length == 2
// 0 <= x, y <= 1000
// At most 3000 calls in total will be made to add and count.
// var DetectSquares = function() {
//     this.map = {};
//     this.points = [];
// };


var DetectSquares = function () {
    // to keep traack of duplicates
    this.map = {};
    // keep track of all the points
    this.points = [];
};

/** 
 * @param {number[]} point
 * @return {void}
 * Time: O(1)
 * Space: O(n)
 */
DetectSquares.prototype.add = function (point) {
    // increase the count of point in map and add to the points array
    const [x, y] = point;
    const key = x + "," + y;
    if (this.map[key] == null) {
        this.map[key] = 0;
    }
    this.map[key]++;
    this.points.push(point);
}

/** 
 * @param {number[]} point
 * @return {number}
 * Time: O(n)
 * Space: O(1)
 */
DetectSquares.prototype.count = function (point) {
    const [x, y] = point;
    let count = 0;
    for (const [r, c] of this.points) {
        // check if they are in same slopes
        if (Math.abs(r - x) !== Math.abs(c - y))
            continue;
        // check if they are in same x or y
        if (x === r || y === c)
            continue;
        // above two checks if this point is on the opposite side
        // Get keys for horizontally and vertically equal points
        const key1 = x + "," + c;
        const key2 = r + "," + y;
        // Multiply them
        count += (this.map[key1] || 0) * (this.map[key2] || 0)
    }
    return count;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */