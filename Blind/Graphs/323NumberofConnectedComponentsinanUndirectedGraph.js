// You have a graph of n nodes.You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
// Return the number of connected components in the graph.

// Example 1:
// Input: n = 5, edges = [[0, 1], [1, 2], [3, 4]]
// Output: 2

// Example 2:
// Input: n = 5, edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

// Output: 1
// Constraints:
// 1 <= n <= 2000
// 1 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai <= bi < n
// ai != bi
// There are no repeated edges.

/**
 * DFS
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * Time Complexity: O(n+m) where n is the number of edges, and m is the number of vertices.
 * Space Complexity: O(n+m) where n is the number of edges, and m is the number of vertices.
 */
var countComponents = function (n, edges) {
    const map = {};

    for (const [x, y] of edges) {
        if (map[x] == null) {
            map[x] = [];
        }
        if (map[y] == null) {
            map[y] = [];
        }
        map[x].push(y);
        map[y].push(x);
    }

    let count = 0;
    const visited = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (map[i] == null) {
            count++;
        }
        else if (visited[i] === 0) {
            dfs(i);
            count++;
        }
    }

    function dfs(node) {
        visited[node] = 1;
        for (let key of map[node]) {
            if (visited[key] === 0)
                dfs(key);
        }

    }
    return count;
};