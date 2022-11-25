// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.ƒ

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


const find_cycle_start = function (head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        // cycle found
        if (fast == slow) {
            let length = 1, current = slow.next;
            // get the loop length
            while (current !== slow) {
                current = current.next;
                length++;
            }
            fast = head, slow = head;
            // increase the fast position by one loop
            while (length > 0) {
                length--
                fast = fast.next;
            }
            // find the start of the loop
            while (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        }
    }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);