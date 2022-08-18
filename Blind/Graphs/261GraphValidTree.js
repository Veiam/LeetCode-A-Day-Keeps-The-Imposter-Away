// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
// Return true if the edges of the given graph make up a valid list, and false otherwise.

// Example 1:
// Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
// Output: true

// Example 2:
// Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
// Output: false

// Constraints:
// 1 <= n <= 2000
// 0 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no self-loops or repeated edges.

/**
 * Iterative DFS
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    // there needs to be one less edges than number of nodes
    if (edges.length !== n - 1)
        return false;

    // go through edges and create an adjacent list
    const list = {};
    for (const [x, y] of edges) {
        list[x] == null ? list[x] = [y] : list[x].push(y);
        list[y] == null ? list[y] = [x] : list[y].push(x);
    }

    // keep track of seen node and its parent
    const seen = { 0: -1 };
    // iterative dfs
    const stack = [0];
    while (stack.length) {
        // get new node
        let key = stack.pop();
        // if node is a leaf, then continue
        if (list[key] == null) {
            continue;
        }

        // loop through adjacent
        for (const adjacent of list[key]) {
            // skip repeated edges
            if (seen[key] == adjacent) {
                continue;
            }
            // adjacent's parent should not exist yet
            if (seen[adjacent])
                return false;
            // push new value to stack
            stack.push(adjacent);
            // set adjacent's parent
            seen[adjacent] = key;
        }
    }
    // total number of seen nodes should match 
    return Object.keys(seen).length === n;

};

/**
 * Graph Theory Recursive
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    // there needs to be one less edges than number of nodes
    if (edges.length !== n - 1)
        return false;

    // go through edges and create an adjacent list
    const list = {};
    for (const [x, y] of edges) {
        list[x] == null ? list[x] = [y] : list[x].push(y);
        list[y] == null ? list[y] = [x] : list[y].push(x);
    }

    const seen = new Set();
    function dfs(key) {
        // if seen already move on
        if (seen.has(key)) {
            return;
        }
        // empty list
        if (list[key] == null) {
            seen.add("");
            return;
        }
        // add it to the seen list
        seen.add(key);
        // loop through its adjacent
        for (const adjacent of list[key]) {
            dfs(adjacent);
        }
    }

    dfs(0);
    // number of nodes seen must equal number of nodes
    return seen.size === n;

};