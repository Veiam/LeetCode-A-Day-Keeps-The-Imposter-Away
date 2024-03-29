// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

const Heap = require("collections/heap");
class SlidingWindowMedian {
    constructor() {
        this.maxHeap = new Heap([], null, ((a, b) => a - b));
        this.minHeap = new Heap([], null, ((a, b) => b - a));
    }

    find_sliding_window_median(nums, k) {
        const result = Array(nums.length - k + 1).fill(0.0);
        for (let i = 0; i < nums.length; i++) {
            // if maxHeap does not contain anything or if value is less than or
            // equal to maxHeap root, then push to maxHeap
            if (this.maxHeap.length === 0 || nums[i] <= this.maxHeap.peek()) {
                this.maxHeap.push(nums[i]);
            } else {
                // else push it to minHeap
                this.minHeap.push(nums[i]);
            }

            // either both the heaps will have equal number of elements or max-heap will have
            // one more element than the min-heap
            if (this.maxHeap.length > this.minHeap.length + 1) {
                this.minHeap.push(this.maxHeap.pop());
            } else if (this.maxHeap.length < this.minHeap.length) {
                this.maxHeap.push(this.minHeap.pop());
            }

            if (i - k + 1 >= 0) { // if we have at least 'k' elements in the sliding window
                // add the median to the the result array
                if (this.maxHeap.length === this.minHeap.length) {
                    // we have even number of elements, take the average of middle two elements
                    result[i - k + 1] = (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
                } else { // because max-heap will have one more element than the min-heap
                    result[i - k + 1] = this.maxHeap.peek();
                }

                // remove the element going out of the sliding window
                const elementToBeRemoved = nums[i - k + 1];
                if (elementToBeRemoved <= this.maxHeap.peek()) {
                    this.maxHeap.delete(elementToBeRemoved); // delete from heap
                } else {
                    this.minHeap.delete(elementToBeRemoved); // delete from heap
                }

                // rebalance it one more time since element has been removed
                if (this.maxHeap.length > this.minHeap.length + 1) {
                    this.minHeap.push(this.maxHeap.pop());
                } else if (this.maxHeap.length < this.minHeap.length) {
                    this.maxHeap.push(this.minHeap.pop());
                }
            }
        }

        return result;
    }
}


const slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
    [1, 2, -1, 3, 5], 2)

console.log(`Sliding window medians are: ${result}`)

slidingWindowMedian = new SlidingWindowMedian()
result = slidingWindowMedian.find_sliding_window_median(
    [1, 2, -1, 3, 5], 3)
console.log(`Sliding window medians are: ${result}`)
