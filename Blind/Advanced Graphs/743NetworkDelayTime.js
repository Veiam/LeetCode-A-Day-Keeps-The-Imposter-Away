// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

// Example 1:
// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2

// Example 2:
// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1

// Example 3:
// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1

// Constraints:
// 1 <= k <= n <= 100
// 1 <= times.length <= 6000
// times[i].length == 3
// 1 <= ui, vi <= n
// ui != vi
// 0 <= wi <= 100
// All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Time: O(n * e), where n is number of nodes and e is number of edges
 * Space: O(n * e)
 */
var networkDelayTime = function (times, n, k) {
    let network = {}

    // build an adjacentcy map 
    for (let [source, target, time] of times) {
        if (network[source] == null) {
            network[source] = [];
        }
        network[source].push([target, time]);
    }

    // starting values
    let nodes = [k];
    let res = 0;
    let arrived = new Array(n + 1).fill(Infinity);
    arrived[k] = 0;

    // until we run out
    while (nodes.length) {
        const node = nodes.shift();
        // if there is no where to go from here
        if (network[node] == null)
            continue;

        // for its neighbors
        for (let [target, time] of network[node]) {
            // target's arrivalTime would be current arrivalTime + time
            let arrivalTime = arrived[node] + time;

            // if we found a min, update the target
            if (arrived[target] > arrivalTime) {
                arrived[target] = arrivalTime;
                nodes.push(target);
            }
        }
    }
    // loop through and find total time
    for (let i = 1; i <= n; i++) {
        res = Math.max(res, arrived[i]);
    }
    // if there is infinity, it means we can't get to all the nodes
    return res === Infinity ? -1 : res;
};