// In this problem, a tree is an undirected graph that is connected and has no cycles.
// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

// Example 1:
// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]

// Example 2:
// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]

// Constraints:
// n == edges.length
// 3 <= n <= 1000
// edges[i].length == 2
// 1 <= ai < bi <= edges.length
// ai != bi
// There are no repeated edges.
// The given graph is connected.
/**
 * @param {number[][]} edges
 * @return {number[]}
 * Time: O(n^2), where n is number of vertice and edges, we have to check verticies and its connection
 * Space: O(n), we keep track of adjacent list size of edges and recursive stack with visited set.
 */
var findRedundantConnection = function (edges) {
    const adjList = new Array(edges.length + 1).fill().map(() => new Set());
    let res = [];
    // build an adjacent list
    for (let [x, y] of edges) {
        if (adjList[x].size > 0 && adjList[y].size > 0) {
            // only check if we can reach the value without adding
            // if both vertices have been touched by edges previously
            if (check(0, x, y, new Set())) {
                return [x, y];
            }
        }
        adjList[x].add(y);
        adjList[y].add(x);

    }

    function check(prev, source, target, visited) {
        for (let next of adjList[source].values()) {
            // if we visited this vertice already, move on
            if (visited.has(next)) {
                continue;
            }
            // if we reached the target, return true
            if (next === target) {
                return true;
            }
            // mark it visited
            visited.add(next);
            // dfs through
            let cycle = check(source, next, target, visited);
            if (cycle) {
                return true;
            }
        }
    }

    return res;
};

/**
 * @param {number[][]} edges
 * @return {number[]}
 * Time: O(n), for every edges, we perform union find which is Inverse-Ackerman function
 * Space: O(n), keep track of parents and ranks
 */
var findRedundantConnection = function (edges) {
    const parents = new Array(edges.length + 1).fill().map((val, index) => index);
    const ranks = new Array(edges.length + 1).fill(1);
    for (let [x, y] of edges) {
        if (ranks[x] >= ranks[y]) {
            if (union(x, y))
                return [x, y];
        }
        else {
            if (union(y, x))
                return [x, y];
        }
    }

    // union find
    function find(x) {
        if (parents[x] != x) {
            parents[x] = find(parents[x]);
        }
        return parents[x];
    }
    function union(parent, child) {
        if (find(parent) === find(child)) {
            return true;
        }
        parents[find(child)] = parents[parent];
        ranks[parent]++;

    }
};