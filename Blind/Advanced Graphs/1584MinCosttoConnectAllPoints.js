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
 * Kruskal's algorithm
 * @param {number[][]} points
 * @return {number}
 * Time: O(n^2 * logn), there can be n^2 edges and each enqueue and dequeue takes logn
 * Space: O(n^2), store edges
 */
class UnionFind {
    constructor(size) {
        this.group = new Array(size).fill(0);
        this.rank = new Array(size).fill(0);
        for (let i = 0; i < size; ++i) {
            this.group[i] = i;
        }
    }

    find(node) {
        if (this.group[node] != node) {
            this.group[node] = this.find(this.group[node]);
        }
        return this.group[node];
    }

    union(node1, node2) {
        let group1 = this.find(node1);
        let group2 = this.find(node2);

        // node1 and node2 already belong to same group.
        if (group1 == group2) {
            return false;
        }

        if (this.rank[group1] > this.rank[group2]) {
            this.group[group1] = group2;
        } else if (this.rank[group1] < this.rank[group2]) {
            this.group[group2] = group1;
        } else {
            this.group[group1] = group2;
            this.rank[group1]++;
        }

        return true;
    }
};

let minCostConnectPoints = function (points) {
    let n = points.length;
    let allEdges = new MinPriorityQueue();

    // Storing all edges of our complete graph.
    for (let currNode = 0; currNode < n; ++currNode) {
        for (let nextNode = currNode + 1; nextNode < n; ++nextNode) {
            let weight = Math.abs(points[currNode][0] - points[nextNode][0]) +
                Math.abs(points[currNode][1] - points[nextNode][1]);

            allEdges.enqueue([weight, currNode, nextNode], weight);
        }
    }

    let uf = new UnionFind(n);
    let mstCost = 0;
    let edgesUsed = 0;

    while (allEdges.size() && edgesUsed < n - 1) {
        let [weight, node1, node2] = allEdges.dequeue().element;

        if (uf.union(node1, node2)) {
            mstCost += weight;
            edgesUsed++;
        }
    }

    return mstCost;
};
/**
 * Prim's algorithm, optimized
 * @param {number[][]} points
 * @return {number}
 * Time: O(n^2), instead of minheap use array with greedy
 * Space: O(n), store dist and visits
 */
let minCostConnectPoints = function (points) {
    const visited = new Array(points.length).fill(false);
    const minDist = new Array(points.length).fill(Infinity);

    let edges = points.length - 1;
    let start = 0;
    visited[0] = true;
    let res = 0;
    while (edges) {
        let min = Infinity;
        let minIndex = 0;
        for (let i = 0; i < points.length; i++) {
            if (!visited[i]) {
                minDist[i] = Math.min(minDist[i], getDist(start, i));
                if (minDist[i] < min) {
                    min = minDist[i];
                    minIndex = i;
                }
            }
        }
        start = minIndex;
        visited[start] = true;
        edges--;
        res += min === Infinity ? 0 : min;
    }
    return res;
    function getDist(p1, p2) {
        return Math.abs(points[p1][0] - points[p2][0]) + Math.abs(points[p1][1] - points[p2][1]);
    }
};