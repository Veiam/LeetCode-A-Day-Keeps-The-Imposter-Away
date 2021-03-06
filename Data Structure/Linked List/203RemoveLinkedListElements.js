// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * Time Complexity: O(n), where n is the length of head
 * Space Complexity: O(1), we only create one extra node
 */
const removeElements = function (head, val) {
    // case for when head starts with a matching val
    while (head && head.val === val)
        head = head.next;

    // head pointer
    let dummy = head;

    while (head && head.next) {
        // if the head.next matches the val then skip the next
        if (head.next.val === val) {
            head.next = head.next.next;
        }
        // else move on
        else {
            head = head.next;
        }

    }
    return dummy;
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * Time Complexity: O(n), where n is the length of head
 * Space Complexity: O(1), we only create one extra node
 */
const removeElements = function (head, val) {
    // set up a dummy
    let prevhead = new ListNode(null);
    prevhead.next = head;

    let prev = prevhead;

    // while we can traverse
    while (prevhead) {
        // check if the next val matches the val
        while (prevhead.next && prevhead.next.val === val) {
            // if so skip it
            prevhead.next = prevhead.next.next;
        }
        // else move on
        prevhead = prevhead.next;
    }

    return prev.next;
};