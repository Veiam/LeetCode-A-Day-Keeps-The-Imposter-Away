// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time Complexity: O(n + m), where n is the length of l1 and m is length of l2.
 * Space Complexity: O(1), we only create extra two nodes.
 */
const mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(null);
    let head = dummy;

    // while both l1 and l2 exist
    while (l1 && l2) {
        if (l1.val > l2.val) {
            dummy.next = l2;
            l2 = l2.next;
            dummy = dummy.next;
        }
        else if (l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
            dummy = dummy.next;
        }
    }

    // l1 or l2 might still have a node left
    dummy.next = l1 === null ? l2 : l1;

    return head.next;
};