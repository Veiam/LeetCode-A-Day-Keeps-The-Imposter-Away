// Given a list of intervals representing the start and end time of ‘N’ meetings,
// find the minimum number of rooms required to hold all the meetings.
class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};

const min_meeting_rooms = function (meetings) {
    // We will sort the meetings based on start time.
    meetings.sort((a, b) => a.start - b.start);
    // We will schedule the first meeting and record its ending time as min and max.
    let prev = meetings[0], roomCount = 1, minEnd = prev.end, maxEnd = prev.end;
    for (let i = 1; i < meetings.length; i++) {
        const current = meetings[i];
        // if it starts before one of the meeting ends
        // then there is an overlap
        if (current.start < maxEnd) {
            // If the next meeting is overlapping with meeting that did not end.
            // We can’t use the room, so we will schedule it in another room 
            if (minEnd > current.start) {
                roomCount++;
            }
            minEnd = Math.min(minEnd, prev.end, current.end);
            maxEnd = Math.max(maxEnd, prev.end, current.end);
        }
        // If the next meeting is not overlapping, we can safely schedule it in the existing room.
        else {
            // no overlap
            prev = current;
            minEnd = current.end;
            maxEnd = current.end;
        }
    }
    return roomCount;
};

console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
