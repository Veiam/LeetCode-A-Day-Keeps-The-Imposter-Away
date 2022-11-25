// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
    constructor(value, next = null) {
        this, value = value;
        this.next = next;
    }
}

const has_cycle = function (head) {
    let fast = head, slow = head;

    // If the LinkedList doesn’t have a cycle in it,
    // the fast pointer will reach the end of the LinkedList before the slow pointer to reveal that there is no cycle in the LinkedList.
    // The slow pointer will never be able to catch up to the fast pointer if there is no cycle in the LinkedList.
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        // foudn the cycle
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);