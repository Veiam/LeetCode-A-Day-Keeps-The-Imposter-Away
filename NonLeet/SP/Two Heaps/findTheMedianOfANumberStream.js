// Design a class to calculate the median of a number stream. The class should have the following two methods:
// insertNum(int num): stores the number in the class
// findMedian(): returns the median of all numbers inserted in the class
// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.
class MedianOfAStream {
    constructor() {
        // containing first half of numbers
        this.maxHeap = new Heap((a, b) => { return a - b; });
        // containing second half of numbers
        this.minHeap = new Heap((a, b) => { return b - a; });
    }

    insert_num(num) {
        if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }

        // either both the heaps will have equal number of elements or max-heap will have one
        // more element than the min-heap
        if (this.maxHeap.length() > this.minHeap.length() + 1) {
            this.minHeap.push(this.maxHeap.pop());
        } else if (this.maxHeap.length() < this.minHeap.length()) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }
    find_median() {
        if (this.maxHeap.length() === this.minHeap.length()) {
            // we have even number of elements, take the average of middle two elements
            return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
        }

        // because max-heap will have one more element than the min-heap
        return this.maxHeap.peek();
    }
};

/** 
 *  custom Heap class
 */
class Heap {
    constructor(comparator) {
        this.values = [];
        this.comparator = comparator;
    }
    // return length;
    length() {
        return this.values.length;
    }

    // add the val to heap
    push(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    // return the first val
    peek() {
        return this.values[0] || null;
    }

    // remove the first val
    pop() {
        // first val is either max or min
        const first = this.values[0];
        const end = this.values.pop();
        // if the heap still contains a value
        if (this.length() > 0) {
            // reset the first val to popped value
            this.values[0] = end;
            // bubble down
            this.bubbleDown();
        }
        // return the popped value;
        return first;
    }

    bubbleUp() {
        // index is the length
        let end = this.length() - 1;
        // parent is the mid point
        let mid = Math.floor((end - 1) / 2);

        // for max, we are checking if end is greater than mid
        // for min, we are checking if end is less than mid
        while (this.comparator(this.values[end], this.values[mid]) < 0) {
            [this.values[mid], this.values[end]] = [this.values[end], this.values[mid]];
            end = mid;
            mid = Math.floor((end - 1) / 2);
        }
    }

    bubbleDown() {
        // heapify
        let index = 0, length = this.length();

        while (true) {
            let swap = index,
                leftIndex = index * 2 + 1,
                rightIndex = leftIndex + 1;

            // for max, we are checking if left is greater than current val
            // for min, we are checking if left is less than current val
            if (leftIndex < length && this.comparator(left, this.values[index]) < 0) {
                swap = this.values[leftIndex];
            }

            // for max, we are checking if right is greater than current val
            // for min, we are checking if right is less than current val
            if (rightIndex < length && this.comparator(right, this.values[index]) < 0) {
                swap = this.values[rightIndex];
            }
            // if nothing to swap, exit
            if (swap === index)
                break;

            // swap
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            // update the index
            index = swap;
        }
    }
}

const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);