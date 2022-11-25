// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:
// Input: stones = [1]
// Output: 1

// Constraints:
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 * Time complexity: O(nlogn), sort and binary search
 * Space complexity: O(n)
 */
var lastStoneWeight = function (stones) {
    stones.sort((a, b) => b - a);

    while (stones.length > 1) {
        let a = stones.shift();
        let b = stones.shift();
        let remaining = a - b;
        // binary search
        if (a > 0) {
            let left = 0, right = stones.length - 1;
            while (left <= right) {
                const mid = (left + right) >> 1;
                const num = stones[mid];
                if (remaining < num) {
                    left = mid + 1;
                }
                else if (remaining > num) {
                    right = mid - 1;
                }
                else {
                    left = mid;
                    break;
                }
            }
            stones.splice(left, 0, remaining);
        }
    }

    return stones[0] || 0;
};

/**
 * @param {number[]} stones
 * @return {number}
 * Time complexity: O(nlogn), sort and binary search
 * Space complexity: O(n)
 */
var lastStoneWeight = function (stones) {
    const heap = new Heap(stones);
    while (heap.size > 1) {
        let x = heap.peek();
        heap.delete();
        let y = heap.peek();
        heap.delete();
        const res = x - y;
        if (res > 0) {
            heap.insert(res);
        }
    }
    return heap.size === 1 ? heap.peek() : 0;
};

class Heap {
    constructor(stones) {
        this.heap = stones;
        this.size = stones.length;
        this.heapify(0);
    }

    right(pos) {
        return 2 * pos + 2;
    }

    left(pos) {
        return 2 * pos + 1;
    }

    isleaf(pos) {
        if (2 * pos + 1 >= this.size) {
            return true;
        }
        return false;
    }

    swap(a, b) {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    fix(pos) {
        if (this.isleaf(pos))
            return;
        let left = this.left(pos);
        let right = this.right(pos);

        let bigger = left;
        if (right < this.size) {
            bigger = this.heap[left] > this.heap[right] ? left : right;
        }
        if (this.heap[pos] < this.heap[bigger]) {
            this.swap(pos, bigger);
            this.fix(bigger);
        }
    }

    heapify(pos) {
        if (this.isleaf(pos))
            return;
        this.heapify(this.left(pos));
        this.heapify(this.right(pos));
        this.fix(pos);
    }

    delete() {
        this.swap(0, --this.size);
        this.fix(0);
        return this.heap[0];
    }

    insert(val) {
        this.size++;
        this.heap[this.size - 1] = val;
        this.heapify(0);
    }

    peek() {
        return this.heap[0];
    }
}

/**
 * Bucket Sort
 * @param {number[]} stones
 * @return {number}
 * Time complexity: O(N + W), number of stones + size of bucket
 * Space complexity: O(W), size of bucket
 */
var lastStoneWeight = function (stones) {

    let bucket = [];
    let maxWeight = 0;
    // create a bucket and keep track of max weight
    for (let stone of stones) {
        bucket[stone] = bucket[stone] + 1 || 1;
        maxWeight = Math.max(maxWeight, stone);
    }

    let biggestWeight = 0;
    let currentWeight = maxWeight;

    while (currentWeight > 0) {
        // if there is no stone for current index
        if (!bucket[currentWeight]) {
            currentWeight--;
        }
        // if current biggest weight is 0 and current index has stones
        else if (biggestWeight === 0) {
            // divied by 2
            bucket[currentWeight] %= 2;
            // if there is 1 left then it will be a biggest ewight
            if (bucket[currentWeight] === 1) {
                biggestWeight = currentWeight;
            }
            currentWeight--;
        }
        else {
            // reduce the current index's stone count
            bucket[currentWeight]--;
            // if the differenec is less than or eqaul to current weight
            if (biggestWeight - currentWeight <= currentWeight) {
                // increase the stone count of difference index
                bucket[biggestWeight - currentWeight] = bucket[biggestWeight - currentWeight] + 1 || 1;
                // we will need to find a ne biggest weight
                biggestWeight = 0;
            }
            else {
                // reduce the current biggest eight
                biggestWeight -= currentWeight;
            }
        }
    }
    return biggestWeight;
};