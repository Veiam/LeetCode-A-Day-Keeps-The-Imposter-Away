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
 * Iterative
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time complexity :  O(n+m).  Because exactly one of l1 and l2 is incremented on each loop iteration,
 * the while loop runs for a number of iterations equal to the sum of the lengths of the two lists.
 * All other work is constant, so the overall complexity is linear.
 * Space complexity :  O(1).  The iterative approach only allocates a few pointers, so it has a constant overall memory footprint.
 */
const mergeTwoLists = function (l1, l2) {
    // dummy node
    let dummy = new ListNode(null);
    const head = dummy;

    // as long as both are not null
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            // if l2 is less than l1, then move l2 forward
            dummy.next = l2;
            l2 = l2.next;
        } else {
            // if l1 is less than l2, then move l1 forward
            dummy.next = l1;
            l1 = l1.next;
        }
        // move dummy forward
        dummy = dummy.next;
    }

    // if one is empty, return the non empty one
    if (!l1 || !l2)
        dummy.next = l1 === null ? l2 : l1;

    return head.next;
};

/**
 * Recursive
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time complexity :  O(n+m). Because each recursive call increments the pointer to l1 or l2 by one (approaching the dangling null at the end of each list),
 * there will be exactly one call to mergeTwoLists per element in each list. Therefore, the time complexity is linear in the combined size of the lists.
 * Space complexity :  O(n+m). The first call to mergeTwoLists does not return until the ends of both l1 and l2 have been reached,
 * so n+m stack frames consume O(n+m) space.
 */
const mergeTwoLists = function (l1, l2) {
    // if one is empty, return the non empty one
    if (!l1 || !l2)
        return l1 === null ? l2 : l1;
    // if l1 is smalelr than l2
    else if (l1.val < l2.val) {
        // move l1 forward
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        // else move l2 forward
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};