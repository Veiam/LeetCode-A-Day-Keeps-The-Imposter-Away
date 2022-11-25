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
    // initialize a map
    const map = {};

    // loop through edges and create an adjacent list
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

    // keep track of visited node and count
    let count = 0;
    const visited = new Array(n).fill(0);

    // loop through each node
    for (let i = 0; i < n; i++) {
        // if we don't have in a map then it's by itself
        if (map[i] == null) {
            count++;
        }
        // if it has not been visited, dfs and increase the count
        else if (visited[i] === 0) {
            dfs(i);
            count++;
        }
    }

    function dfs(node) {
        // update the vistied status
        visited[node] = 1;
        // loop through the adjacents
        for (let key of map[node]) {
            // recursively dfs only if it has not been visited yet
            if (visited[key] === 0)
                dfs(key);
        }
    }

    // return the count
    return count;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * Time and Space: O(n), Union find
 */
var countComponents = function (n, edges) {
    const parents = new Array(n).fill().map((val, index) => index);
    const ranks = new Array(n).fill(1);

    // loop through and perform union finds
    for (const [x, y] of edges) {
        if (ranks[x] >= ranks[y]) {
            union(x, y);
        } else {
            union(y, x);
        }
    }

    // see if node needs a new parent
    for (let i = 0; i < n; i++) {
        parents[i] = find(i);
    }

    // return the size of unique parents
    return (new Set(parents)).size;

    function find(node) {
        if (parents[node] != node) {
            parents[node] = find(parents[node]);
        }
        return parents[node];
    }

    function union(parent, child) {
        const parentP = find(parent);
        const childP = find(child);

        parents[childP] = parentP;
        ranks[parentP]++;
    }
};