// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee.
// Our goal is to find out if there is a free interval that is common to all employees.
// You can assume that each list of employee working hours is sorted on the start time.
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const find_employee_free_time = (schedules) => {
    if (!schedules || schedules.length === 0) return [];


    const merged = schedules.reduce((merged, schedule) => [...merged, ...schedule]);
    // Sort in ascending order of schedules
    merged.sort((a, b) => a.start - b.start);

    const result = [];

    let prev = merged[0], start = prev.start, end = prev.end;
    for (let i = 1; i < merged.length; i++) {
        let current = merged[i];

        // Check for overlapping intervals
        // Note that prev ending at the same time as current starts in also overlapping since it means
        // that there can't be a free time interval between them
        if (end >= current.start) {
            start = Math.min(start, current.start);
            end = Math.max(end, current.end)
        } else {
            result.push(new Interval(end, current.start));
            start = current.start;
            end = current.end;
        }
    }

    return result;
};


let input = [
    [new Interval(1, 3), new Interval(5, 6)],
    [new Interval(2, 3), new Interval(6, 8)],
];
process.stdout.write('Free intervals: ', end = '');
let result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

input = [
    [new Interval(1, 3), new Interval(9, 12)],
    [new Interval(2, 4)],
    [new Interval(6, 8)],
];
process.stdout.write('Free intervals: ', end = '');
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

input = [
    [new Interval(1, 3)],
    [new Interval(2, 4)],
    [new Interval(3, 5), new Interval(7, 9)],
];
process.stdout.write('Free intervals: ', end = '');
result = find_employee_free_time(input);
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();
