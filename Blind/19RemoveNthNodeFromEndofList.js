// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * Time complexity: O(n), one pass
 * Space complexity: O(1), constant space
 */
var removeNthFromEnd = function (head, n) {
    // dummy node with two pointers
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    // set slow and fast n apart
    while (n) {
        fast = fast.next;
        n--;
    }
    // when fast reaches the end, slow's next is at the n
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // remove it
    slow.next = slow.next.next;

    return dummy.next;
};