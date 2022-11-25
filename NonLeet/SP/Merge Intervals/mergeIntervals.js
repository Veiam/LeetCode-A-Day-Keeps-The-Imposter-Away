// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}


function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    // Sort the intervals on the start time to ensure a.start <= b.start
    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [];
    // Initial interval
    let start = intervals[0].start, end = intervals[0].end;
    for (i = 1; i < intervals.length; i++) {
        // get the interval
        const interval = intervals[i];
        // If ‘a’ overlaps ‘b’ (i.e. b.start <= a.end), we need to merge them into a new interval ‘c’ such that:
        // c.start = a.start
        // c.end = max(a.end, b.end)
        if (interval.start <= end) { // overlapping intervals, adjust the 'end'
            end = Math.max(interval.end, end);
        } else {
            // non-overlapping interval, add the previous interval and reset
            mergedIntervals.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    // add the last interval
    mergedIntervals.push(new Interval(start, end));
    return mergedIntervals;
}


process.stdout.write('Merged intervals: ');
let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Merged intervals: ');
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();