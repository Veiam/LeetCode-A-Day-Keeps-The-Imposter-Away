// There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks
// which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs,
// find out if it is possible to schedule all the tasks.

const is_scheduling_possible = function (tasks, prerequisites) {


    if (tasks <= 0) {
        return false;
    }

    // a. Initialize the graph
    const adjList = Array(tasks).fill(0).map(() => Array());
    const inDegrees = Array(tasks).fill(0);

    // b. Build the graph
    prerequisites.forEach((task) => {
        let pre = task[0];
        let current = task[1];
        adjList[pre].push(current);
        inDegrees[current]++;
    });

    // c. Find all sources i.e., all vertices with 0 in-degrees
    const queue = [];
    for (let i = 0; i < tasks; i++) {
        if (inDegrees[i] == 0)
            queue.push(i);
    }

    // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
    // if a child's in-degree becomes zero, add it to the sources queue
    const taskList = [];
    while (queue.length > 0) {
        const vertex = queue.shift();
        taskList.push(vertex);
        adjList[vertex].forEach((child) => {
            inDegrees[child]--;
            if (inDegrees[child] == 0) {
                queue.push(child);
            }
        });
    }

    // if sortedOrder doesn't contain all tasks, there is a cyclic dependency between tasks, therefore, we
    // will not be able to schedule all tasks
    return tasks === taskList.length;
};


console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)
