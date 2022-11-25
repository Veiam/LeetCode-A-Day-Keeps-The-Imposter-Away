// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that
// the nodes from the second half of the LinkedList are inserted alternately to the
// nodes rom the first half in reverse order.
// So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null,
// your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }


    print_list() {
        temp = this;
        while (temp !== null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
        console.log();
    }
}

function reorder(head) {
    if (head === null || head.next === null) {
        return;
    }

    // find middle of the LinkedList
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // slow is now pointing to the middle node
    headSecondHalf = reverse(slow); // reverse the second half
    headFirstHalf = head;

    // rearrange to produce the LinkedList in the required order
    while (headFirstHalf !== null && headSecondHalf !== null) {
        // store what the orginal next one is
        temp = headFirstHalf.next;
        // change the next to point to the second half
        headFirstHalf.next = headSecondHalf;
        // move the pointer
        headFirstHalf = temp;

        // store what the orginal next one is
        temp = headSecondHalf.next;
        // change the next to point to the first half
        headSecondHalf.next = headFirstHalf;
        // move the pointer
        headSecondHalf = temp;
    }
    // set the next of the last node to 'null'
    if (headFirstHalf !== null) {
        headFirstHalf.next = null;
    }
}


function reverse(head) {
    // to store previous value
    let prev = null;
    while (head !== null) {
        // store what the orginal next one is
        next = head.next;
        // point the next to previous stored value
        head.next = prev;
        // set the previous head to be a current one
        prev = head;
        // move the pointer to the next
        head = next;
    }
    return prev;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();