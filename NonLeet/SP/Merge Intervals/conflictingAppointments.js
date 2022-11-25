// Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_intervals() {
        process.stdout.write(`${this.start} ${this.end}`);
    }
}

const can_attend_all_appointments = function (intervals) {
    intervals.sort((a, b) => a.start - b.start);

    let start = intervals[0].start, end = intervals[0].end;

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];

        if (interval.start < end) {
            // please note the comparison above, it is "<" and not "<="
            // while merging we needed "<=" comparison, as we will be merging the two
            // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but
            // such intervals don't represent conflicting appointments as one starts right
            // after the other
            return false;
        }
        start = interval.start;
        end = interval.end;
    }

    return true;
};

console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
    new Interval(4, 5),
    new Interval(2, 3),
    new Interval(3, 6),
])}`);