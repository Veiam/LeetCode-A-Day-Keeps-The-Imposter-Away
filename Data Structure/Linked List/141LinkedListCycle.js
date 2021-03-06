// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * Time Complexity: O(N + K), where N is the length of Linked List and K is the length of cycle
 * Space Complexity: O(1), we only use two nodes.
 */
const hasCycle = function (head) {
    if (head === null)
        return false;
    // Fast and slow pointers
    let fast = head, slow = head;
    // while we didn't reach the end
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        // if fast and slow are same, then there is a cycle
        if (fast === slow)
            return true;
    }
    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 * Time Complexity: O(N + K), where N is the length of Linked List and K is the length of cycle
 * Space Complexity: O(N) The space dpends on the number of elemetns added to the has table, which contains at most n elements.
 */
 const hasCycle = function (head) {
    let visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return true;
        }
        visited.add(head);
        head = head.next;
    }
    return false;
};