class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const Heap = require('../../node_modules/collections/heap');

// Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.
const merge_lists = function (lists) {
    // create a min heap
    const minHeap = new Heap([], null, (a, b) => b.value - a.value);

    // go through lists and fill min heap
    for (let i = 0; i < lists.length; i++) {
        minHeap.push(lists[i]);
    }

    // get the head of min heap
    let head = minHeap.pop();

    // dummy head
    let resultHead = head;

    // put back next node of head
    minHeap.push(head.next);

    // while minHeap contains a list
    while (minHeap.length > 0) {
        // get a new node
        let node = minHeap.pop();
        // set the node to next
        head.next = node;
        // if node.next is not null
        if (node.next !== null) {
            // push it to a min heap
            minHeap.push(node.next);
        }
        // move the head along
        head = head.next;
    }
    // return dummy head
    return resultHead;
};




l1 = new ListNode(2)
l1.next = new ListNode(6)
l1.next.next = new ListNode(8)

l2 = new ListNode(3)
l2.next = new ListNode(6)
l2.next.next = new ListNode(7)

l3 = new ListNode(1)
l3.next = new ListNode(3)
l3.next.next = new ListNode(4)

result = merge_lists([l1, l2, l3])
output = "Here are the elements form the merged list: ";
while (result != null) {
    output += result.value + " ";
    result = result.next;
}
console.log(output);
