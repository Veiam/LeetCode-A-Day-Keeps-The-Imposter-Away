// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

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
 * Time Complexity: O(N), where NN is the number of nodes in the given list.
 * Space Complexity: O(1), the space used by slow and fast.
 */
const middleNode = function (head) {
    // fast and slow pointer
    let slow = head, fast = head;
    // while fast and its next is not null
    while (fast !== null && fast.next !== null) {
        // set slow to next
        slow = slow.next;
        // set fast to next of next
        fast = fast.next.next;
    }
    // when fast reaches the end, slow reached the middle
    // since fast is going twice as fast as the slow
    return slow;
};