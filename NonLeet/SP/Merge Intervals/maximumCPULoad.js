// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running.
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.
class Job {
    constructor(start, end, cpu_load) {
        this.start = start;
        this.end = end;
        this.cpu_load = cpu_load;
    }
};

const find_max_cpu_load = function (jobs) {
    // sort the jobs by start time
    jobs.sort((a, b) => a.start - b.start);
    // store jobs with end hours and load time
    const map = new Map;
    // run our first job
    let prev = jobs[0], maxLoad = 0, maxEnd = prev.end;
    map.set(prev.end, prev.cpu_load);

    for (let i = 1; i < jobs.length; i++) {
        const current = jobs[i];
        let currentLoad = current.cpu_load;
        // overlap
        if (current.start < maxEnd) {
            // loop through to calculate the current load
            // and delete any that have ended;
            map.forEach((load, hour) => {
                if (hour >= current.start)
                    currentLoad += load;
                else map.delete(hour);
            })
            maxEnd = Math.max(maxEnd, prev.end, current.end);
        }
        else {
            // no more overlap, time to clear map
            map.clear();
            currentLoad = current.cpu_load;
            maxEnd = current.end;
        }
        // if there is a job with matching end
        // add to its load
        if (map.has(current.end)) {
            map.set(current.end, current.cpu_load + map.get(current.end));
        }
        // else add the current job to the map
        else {
            map.set(current.end, current.cpu_load);
        }

        maxLoad = Math.max(currentLoad, maxLoad);
    }
    return maxLoad;
};


console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
    [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
    [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
    [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)
