// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example 1:
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

// Constraints:
// 1 <= k <= points.length <= 104
// -104 < xi, yi < 104

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let heap = new Heap(points);
    return heap.delete(k);
};

class Heap {
    constructor(list) {
        this.points = [];
        for (let [x, y] of list) {
            const dist = Math.sqrt(x * x + y * y);
            this.points.push([dist, [x, y]]);
        }
        this.heapify(0);
    }

    left(pos) {
        return pos * 2 + 1;
    }
    right(pos) {
        return pos * 2 + 2
    }

    isLeaf(pos) {
        if (this.left(pos) >= this.points.length) {
            return true;
        }
        return false;
    }

    fix(pos) {
        if (this.isLeaf(pos)) {
            return;
        }

        let left = this.left(pos);
        let right = this.right(pos);

        let smaller = left;
        if (right < this.points.length && this.points[left][0] > this.points[right][0]) {
            smaller = right;
        }
        if (this.points[smaller][0] < this.points[pos][0]) {
            [this.points[pos], this.points[smaller]] = [this.points[smaller], this.points[pos]];
            this.fix(smaller);
        }

    }

    heapify(pos) {
        if (this.isLeaf(pos))
            return;

        this.heapify(this.left(pos));
        this.heapify(this.right(pos));

        this.fix(pos);
    }

    delete(k) {
        let res = [];
        while (k > 0) {
            [this.points[0], this.points[this.points.length - 1]] = [this.points[this.points.length - 1], this.points[0]];
            res.push(this.points.pop()[1]);
            k--;
            this.fix(0);
        }

        return res;
    }
}