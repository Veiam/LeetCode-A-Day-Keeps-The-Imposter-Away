// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.
// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.
// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Example 1:
// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]

// Example 2:
// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.

// Constraints:
// 1 <= tickets.length <= 300
// tickets[i].length == 2
// fromi.length == 3
// toi.length == 3
// fromi and toi consist of uppercase English letters.
// fromi != toi
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    // Sort and build adjancet map
    tickets.sort();
    const adjs = {}
    for (let [from, to] of tickets) {
        if (!(from in adjs)) {
            adjs[from] = [];
        }
        adjs[from].push(to);
        if (!(to in adjs)) {
            adjs[to] = [];
        }
    }

    // We always start from JFK
    let res = [];
    let init = ["JFK"];
    dfs("JFK");

    function dfs(from) {
        // return if we already found res
        if (res.length) {
            return;
        }
        // if length matches
        if (init.length === tickets.length + 1) {
            res = init.slice();
        }
        // backtrack
        for (let i = 0; i < adjs[from].length; i++) {
            const to = adjs[from].shift();
            init.push(to);
            dfs(to);
            init.pop();
            adjs[from].push(to);
        }
    }

    return res;
};