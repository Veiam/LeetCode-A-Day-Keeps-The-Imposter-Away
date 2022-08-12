// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * DFS
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * Time Complexity: O(n+m) where n is the number of courses, and m is the number of dependencies.
 * Space Complexity: O(n+m) where n is the number of courses, and m is the number of dependencies.
 */
var canFinish = function (numCourses, prerequisites) {
    const list = {};
    const checked = {};

    for (const [x, y] of prerequisites) {
        if (!list[x]) {
            list[x] = [];
        }
        list[x].push(y);
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, {})) {
            return false;
        }
    }
    return true;

    function dfs(key, path) {
        if (path[key]) {
            return true;
        }

        if (!list[key] || checked[key]) {
            return false;
        }

        path[key] = true;
        checked[key] = true;

        let ret = false;
        for (const req of list[key]) {
            ret = dfs(req, path);
            if (ret) {
                break;
            }
        }

        path[key] = false;
        return ret;
    }

};

/**
 * Topological Sort
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * Time Complexity: O(n+m) where n is the number of courses, and m is the number of dependencies.
 * Space Complexity: O(n+m) where n is the number of courses, and m is the number of dependencies.
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = {};
    let totalDeps = 0;
    for (const [next, prev] of prerequisites) {
        if (!graph[prev]) {
            graph[prev] = [[], 0];
        }
        graph[prev][0].push(next);
        if (!graph[next]) {
            graph[next] = [[], 0];
        }
        graph[next][1]++;
        totalDeps++;
    }

    const nodepCourses = [];
    // start from coursee that have no prerequ
    for (const key of Object.keys(graph)) {
        if (graph[key][1] == 0) {
            nodepCourses.push(key);
        }
    }

    let removedEdges = 0;

    while (nodepCourses.length) {
        const course = nodepCourses.pop();

        for (let nextCourse of graph[course][0]) {
            graph[nextCourse][1]--;
            removedEdges++;
            if (graph[nextCourse][1] == 0) {
                nodepCourses.push(nextCourse);
            }
        }
    }

    if (removedEdges == totalDeps) {
        return true;
    }
    return false;

};