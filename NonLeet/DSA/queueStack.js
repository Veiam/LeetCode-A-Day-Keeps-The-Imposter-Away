class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        this.stack.pop();
    }
}

function Queue() {
    this.queue = {};
    this.tail = 0;
    this.head = 0;
}

Queue.prototype.enqueue = function (element) {
    this.queue[this.tail++] = element;
}

Queue.prototype.dequeue = function () {
    if (this.tail === this.head)
        return undefined;

    let element = this.queue[this.head];
    delete this.elements[this.head++];
    return element;
}