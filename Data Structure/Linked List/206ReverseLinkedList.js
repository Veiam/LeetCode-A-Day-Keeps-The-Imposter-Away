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
 * Time Complexity: O(n), where n is the length of head.
 * Space Complexity: O(1), we only require an extra node to store prev.
 */
const reverseList = function (head) {
    let prev = null

    // while head is valid
    // set next head to prev
    // set current head to next head
    // set prev to current head
    while (head) {
        [head.next, head, prev] = [prev, head.next, head];
    }

    return prev;
};