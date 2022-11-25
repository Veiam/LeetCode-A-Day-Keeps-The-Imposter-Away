// Given a list of appointments, find all the conflicting appointments.

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

const find_all_conflicting_appointments = function (intervals) {
    intervals.sort((a, b) => a.start - b.start);

    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];

        if (interval.start < prev.end) {
            console.log(`[${prev.start}, ${prev.end}] and [${interval.start}, ${interval.end}] conflict.`);
        }
        else {
            prev = interval;
        }

    }
};

find_all_conflicting_appointments([
    new Interval(2, 3),
    new Interval(3, 6),
    new Interval(4, 5),
    new Interval(5, 7),
    new Interval(7, 8)
]);