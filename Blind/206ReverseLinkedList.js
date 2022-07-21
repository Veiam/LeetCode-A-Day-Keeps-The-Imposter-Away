// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
var reverseList = function (head) {
    let prev = null;
    // loop through set next to prev, prev to head, head to next
    while (head) {
        [head.next, prev, head] = [prev, head, head.next];
    }
    return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time and space complexity: O(n), we touch each node and recursion stack
 */
var reverseList = function (head) {
    // reached the end of the list
    if (!head || !head.next) {
        return head;
    }

    node = reverseList(head.next);
    // set the next node's next to current one, so reversing it
    head.next.next = head;
    // set the next to null to avoid cycle, cut ties with next node
    head.next = null;
    // return reversed node
    return node;
};