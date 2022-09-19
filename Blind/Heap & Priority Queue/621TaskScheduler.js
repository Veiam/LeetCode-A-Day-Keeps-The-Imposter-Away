// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
// Return the least number of units of times that the CPU will take to finish all the given tasks.

// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// Example 2:
// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.

// Example 3:
// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: 
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

// Constraints:
// 1 <= task.length <= 104
// tasks[i] is upper-case English letter.
// The integer n is in the range [0, 100].
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * Time: O(nlogn)
 * Space: O(n)
 */
class Heap {
    constructor(nums) {
        this.heap = [];
        this.length = 0;
        for (let value of nums.values()) {
            this.insert(value);
        }
    }

    insert(num) {
        this.heap.push(num);
        this.length++;
        this.siftUp(this.length - 1);
    }

    delete() {
        let num = this.heap.shift();
        this.length--;
        this.siftDown(0);
        return num;
    }

    // move an element that is not properly positioned up the tree
    siftUp(pos) {
        let k = (pos - 1) >> 1;
        while (pos > 0 && this.heap[pos] > this.heap[k]) {
            [this.heap[pos], this.heap[k]] = [this.heap[k], this.heap[pos]];
            pos = k;
            k = (pos - 1) >> 1;
        }
    }

    // move an element that is not properly positioend down thre tree
    siftDown(pos) {
        let k = pos * 2 + 1;
        while (k < this.length) {
            if (k + 1 < this.length && this.heap[k + 1] > this.heap[k]) {
                k++;
            }

            if (this.heap[pos] > this.heap[k]) {
                return;
            }

            [this.heap[pos], this.heap[k]] = [this.heap[k], this.heap[pos]];
            pos = k;
            k = pos * 2 + 1;
        }
    }
}

var leastInterval = function (tasks, n) {
    if (n === 0) {
        return tasks.length;
    }

    let map = new Map();

    for (let task of tasks) {
        if (!map.has(task)) {
            map.set(task, 0);
        }
        map.set(task, map.get(task) + 1);
    }

    let heap = new Heap(map);
    let queue = [];
    let res = 0;
    while (heap.length || queue.length) {
        res++;
        if (queue.length && res >= queue[0][1]) {
            heap.insert(queue.shift()[0]);
        }
        if (heap.length) {
            let task = heap.delete();
            task--;
            if (task) {
                queue.push([task, res + n + 1]);
            }
        }
    }
    return res;
};

/**
 * Greedy
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * Time: O(n)
 * Space: O(1)
 */
var leastInterval = function (tasks, n) {
    // The maximum number of tasks is 26. Let's allocate an array frequencies of 26 elements to keep the frequency of each task.
    let frequencies = new Array(26).fill(0);
    // Iterate over the input array and store the frequency of task A at index 0, the frequency of task B at index 1, etc
    for (let t of tasks) {
        frequencies[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    // Sort the array and retrieve the maximum frequency f_max. This frequency defines the max possible idle time: idle_time = (f_max - 1) * n.
    frequencies.sort((a, b) => a - b);
    let max = frequencies[25];
    let idle = (max - 1) * n;

    // Pick the elements in the descending order one by one.
    // At each step, decrease the idle time by min(f_max - 1, f) where f is a current frequency.
    for (let i = frequencies.length - 2; i >= 0 && idle > 0; i--) {
        idle -= Math.min(max - 1, frequencies[i]);
    }
    // Return busy slots + idle slots: len(tasks) + idle_time.
    idle = Math.max(0, idle);
    return idle + tasks.length;
};