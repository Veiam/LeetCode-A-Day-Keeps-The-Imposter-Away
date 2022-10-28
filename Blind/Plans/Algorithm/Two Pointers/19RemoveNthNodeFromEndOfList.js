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
 * Time complexity : O(n). The algorithm makes one traversal of the list of n nodes.
 * Space complexity : O(1). We only used constant extra space.
 */
const removeNthFromEnd = function (head, n) {
    // dummy header
    let dummy = new ListNode(0);
    // set dummy next to head
    // so we can return dummy.next at the end
    dummy.next = head;
    // create a fast and slow pointer
    let p1 = dummy, p2 = dummy;

    // while p1 is not null
    // advance it by n + 1
    while (p1 !== null && n >= 0) {
        p1 = p1.next;
        n--;
    }

    // when p1 reaches the end
    // p2 will be at the position n - 1
    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    // remove n
    p2.next = p2.next.next;

    // return head
    return dummy.next;
};