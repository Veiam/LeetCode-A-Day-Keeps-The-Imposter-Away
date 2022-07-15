// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:
// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * Time complexity: O(nlogk), k is the number of linked lists and n is number of nodes
 * Space complexity: O(1), constant space
 */
var mergeKLists = function (lists) {
    // if there is nothing to merge
    if (!lists.length) {
        return null;
    }

    // divide and conquer until there is only one left
    while (lists.length > 1) {
        let length = lists.length;
        // pair up linked lists then merge
        while (length >= 2) {
            let dummy = new ListNode(0);
            let head = dummy;
            let first = lists.shift();
            let second = lists.shift();
            while (first && second) {
                if (first.val <= second.val) {
                    dummy.next = first;
                    first = first.next;
                } else {
                    dummy.next = second;
                    second = second.next;
                }
                dummy = dummy.next;
            }
            dummy.next = first !== null ? first : second;
            // add it back to the list;
            lists.push(head.next);
            length = length - 2;
        }
    }

    return lists[0];
};