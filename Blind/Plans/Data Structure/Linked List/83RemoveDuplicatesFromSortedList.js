/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}\
 * Time Complexity: O(n), where n is the length of head
 * Space Complexity: O(1), we only need an extra node
 */
const deleteDuplicates = function (head) {
    let dummy = head;
    while (head && head.next) {
        // if current head and next head are same, then skip the next
        if (head.val === head.next.val) {
            head.next = head.next.next;
        }
        // else we move on
        else {
            head = head.next;
        }
    }
    return dummy;
};