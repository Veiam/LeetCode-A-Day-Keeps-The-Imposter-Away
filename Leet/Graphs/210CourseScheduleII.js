// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:
// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:
// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * Time and Space: O(V + E), where V is vertices an E is edges. we go through each verticies
 */
var findOrder = function (numCourses, prerequisites) {
    const topoOrder = [];
    const adjList = new Array(numCourses).fill().map(() => []);
    const color = new Array(numCourses).fill(1);
    let cycle = false;

    // build an adjacent list
    for (let [next, prev] of prerequisites) {
        if (!adjList[prev]) {
            adjList[prev] = [];
        }
        adjList[prev].push(next);
    }

    // loop through
    for (let i = 0; i < numCourses; i++) {
        // if we haven't visited it yet
        if (color[i] === 1)
            dfs(i);
    }

    // dfs
    function dfs(num) {
        // if there is a cycle then no need to go through anymore
        if (cycle) {
            return;
        }
        // mark it so we know we visited it in our current loop
        color[num] = 0;

        // loop through its neighbors
        for (let neighbor of adjList[num]) {
            // if we haven't vistied
            if (color[neighbor] === 1) {
                dfs(neighbor);
            }
            // if we visited it in current loop then there is a cycle
            else if (color[neighbor] === 0) {
                cycle = true;
            }
        }
        // mark it complete
        color[num] = -1;
        // add it to topological order
        topoOrder.push(num);
    }

    return cycle ? [] : topoOrder.reverse();
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * Time and Space: O(V + E), where V is vertices an E is edges. we go through each verticies
 */
var findOrder = function (numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill().map(() => []);
    const required = new Array(numCourses).fill(0);
    // build an adjacent list and keep track of dependency counts
    for (let [next, prev] of prerequisites) {
        adjList[prev].push(next);
        required[next]++;
    }

    const nodep = [];

    // find courses with no prereqs
    for (let i = 0; i < numCourses; i++) {
        if (required[i] === 0) {
            nodep.push(i);
        }
    }

    // bfs loop through courses
    for (let i = 0; i < nodep.length; i++) {
        for (let neighbor of adjList[nodep[i]]) {
            required[neighbor]--;
            if (required[neighbor] === 0)
                nodep.push(neighbor);
        }
    }

    return nodep.length === numCourses ? nodep : [];
};