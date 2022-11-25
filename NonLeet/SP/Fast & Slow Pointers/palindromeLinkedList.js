// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished.
// The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const is_palindromic_linked_list = function (head) {
    let fast = head, slow = head;

    // find the middle
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // reverse the second half
    headSecondHalf = reverse(slow);
    // store the head of reversed part to revert back later
    copyHeadSecondHalf = headSecondHalf;

    // compare the first and the second half
    while ((head !== null && headSecondHalf !== null)) {
        // not a palindrome
        if (head.value !== headSecondHalf.value) {
            // restore the linkedList
            reverse(copyHeadSecondHalf);
            return false;
        }

        head = head.next;
        headSecondHalf = headSecondHalf.next;
    }
    // restore the linkedList
    reverse(copyHeadSecondHalf);
    return true;
};

function reverse(head) {
    let prev = null;
    while (head !== null) {
        // store what the next one was going to be
        next = head.next;
        // point the next to prev value instead, if it's the first index then it's null
        head.next = prev;
        // set the previous value to current head
        prev = head;
        // move the head forward
        head = next;
    }
}
head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
