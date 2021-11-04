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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Iterative
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Time complexity :  O(n). Assume that n is the list's length, the time complexity is O(n).
 * Space complexity :  O(1).
 */
const reverseList = function (head) {
    let reverse = null;
    while (head) {
        // set next to previous value, store the current value, move the head along
        [head.next, reverse, head] = [reverse, head, head.next];
    }
    return reverse;
};

/**
 * Recursion
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Time complexity :  O(n). Assume that n is the list's length, the time complexity is O(n).
 * Space complexity :  O(n). The extra space comes from implicit stack space due to recursion. The recursion could go up to n levels deep.
 */
const reverseList = function (head) {
    if (head == null || head.next == null)
        return head;
    // get the next value
    let node = reverseList(head.next);
    // set the next next node to point to head, set the next node to point to null
    [head.next.next, head.next] = [head, null];

    return node;
};