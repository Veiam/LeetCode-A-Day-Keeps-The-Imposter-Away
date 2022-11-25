// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks
// which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs,
// write a method to find the ordering of tasks we should pick to finish all tasks.

const find_order = function (tasks, prerequisites) {
    const sortedOrder = [];

    // a. Initialization
    const adjLists = Array(tasks).fill(0).map(() => Array()); // adjacency list graph
    const inDegrees = Array(tasks).fill(0); // count of incoming edges

    // b. Build the graph and find in-degrees of all vertices
    prerequisites.forEach((task) => {
        let parent = task[0];
        let child = task[1];
        adjLists[parent].push(child); // put the child into it's parent's list
        inDegrees[child]++; // increment child's inDegree
    });

    // c. Find all sources
    const sources = [];
    for (let i = 0; i < tasks; i++) {
        if (inDegrees[i] == 0) {
            sources.push(i);
        }
    }

    // d. sort
    while (sources.length > 0) {
        const vertex = sources.shift();
        sortedOrder.push(vertex);
        // get the node's children to decrement their in-degrees
        adjLists[vertex].forEach((task) => {
            inDegrees[task]--;
            if (inDegrees[task] == 0) {
                sources.push(task);
            }
        })
    }

    // if sortedOrder doesn't contain all tasks, there is a cyclic dependency between tasks, therefore, we
    // will not be able to schedule all tasks
    if (tasks != sortedOrder.length)
        return [];

    return sortedOrder;
};


console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${find_order(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])}`)
