// You are given a list of tasks that need to be run, in any order, on a server.
// Each task will take one CPU interval to execute but once a task has finished,
// it has a cooling period during which it can’t be run again. If the cooling period for all tasks is ‘K’ intervals,
// find the minimum number of CPU intervals that the server needs to finish all tasks.
const Heap = require('../../node_modules/collections/heap');
function schedule_tasks(tasks, k) {
    let intervalCount = 0,
        taskFrequencyMap = {};
    tasks.forEach((chr) => {
        if (!(chr in taskFrequencyMap)) {
            taskFrequencyMap[chr] = 1;
        } else {
            taskFrequencyMap[chr]++;
        }
    });


    const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));

    // add all tasks to the max heap
    Object.keys(taskFrequencyMap).forEach((char) => {
        maxHeap.push([taskFrequencyMap[char], char]);
    });

    while (maxHeap.length > 0) {
        const waitList = [];
        let n = k + 1; // try to execute as many as 'k+1' tasks from the max-heap
        while (n > 0 && maxHeap.length > 0) {
            intervalCount++;
            const [frequency, char] = maxHeap.pop();
            if (frequency > 1) {
                // decrement the frequency and add to the waitList
                waitList.push([frequency - 1, char]);
            }
            n -= 1;
        }

        // put all the waiting list back on the heap
        waitList.forEach(task => maxHeap.push(task));


        if (maxHeap.length > 0) {
            intervalCount += n; // we'll be having 'n' idle intervals for the next iteration
        }
    }

    return intervalCount;
}


console.log(`Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'a', 'a', 'b', 'c', 'c'], 2)}`);
console.log(`Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'b', 'a'], 3)}`);