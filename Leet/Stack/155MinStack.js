// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:
// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

// stack to keep track of numbers
// minStack to keep track of min numbers
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 * Time and space complexity: O(1)
 */
MinStack.prototype.push = function (val) {
    if (!this.stack.length) {
        this.stack.push(val);
        this.minStack.push([val, 1]);
    }
    else {
        this.stack.push(val);
        let min = this.minStack[this.minStack.length - 1];
        if (min[0] === val) {
            min[1]++;
        }
        else if (min[0] > val) {
            this.minStack.push([val, 1]);
        }
    }
};

/**
 * @return {void}
 * Time and space complexity: O(1)
 */
MinStack.prototype.pop = function () {
    const nodeRemoved = this.stack.pop();
    const min = this.minStack[this.minStack.length - 1];
    if (nodeRemoved === min[0]) {
        min[1]--;
        if (min[1] === 0) {
            this.minStack.pop();
        }
    }
};

/**
 * @return {number}
 * Time and space complexity: O(1)
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 * Time and space complexity: O(1)
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1][0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */