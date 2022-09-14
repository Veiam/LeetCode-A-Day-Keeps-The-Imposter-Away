// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Time complexity: O(n), we may visit each node at max, twice each
 * Space complexity: O(k), at store up to k at a time.
 */
var reverseKGroup = function (head, k) {
    let res = new ListNode(0, null);
    let start = res;
    let group = [];

    while (head) {
        // push the current node to group
        group.push(head);
        // move to next one
        head = head.next;
        // if saved nodes in group is equal to 
        if (group.length === k) {
            // loop until it's empty
            while (group.length) {
                // pop
                const node = group.pop();
                // set it to next
                start.next = node;
                start = start.next;
            }
        }
    }

    // take care of remaining
    if (group.length) {
        start.next = group[0];
    }
    else {
        start.next = null;
    }

    return res.next;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Time complexity: O(n)
 * Space complexity: O(N/k), recursion stack
 */
var reverseKGroup = function (head, k) {
    let count = 0;
    let dummy = head;

    // see if there are at least k nodes
    while (count < k && dummy !== null) {
        dummy = dummy.next;
        count++;
    }

    // reverse
    if (count == k) {
        // reverse the k nodes then return head of reversed nodes
        let reversedHead = reverseLinkedList(head, k);

        // recursively, reverse next group
        head.next = reverseKGroup(dummy, k);
        return reversedHead;
    }

    return head;
};

function reverseLinkedList(head, k) {
    let newHead = new ListNode();
    let dummy = head;

    while (k > 0) {
        // temporarily keep track of current node's original next node
        let nextNode = dummy.next;
        // reverse it
        dummy.next = newHead;
        newHead = dummy;

        // move on to next node
        dummy = nextNode;
        k--
    }

    return newHead;
}


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Time complexity: O(n)
 * Space compelxity, O(1)
 */
var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        // get kth node
        let kth = getKth(groupPrev, k);
        // if there aren't enough nodes, break
        if (!kth) {
            break;
        }

        // set the next group start point
        let groupNext = kth.next;

        // reverse group
        let prev = kth.next; 3
        let curr = groupPrev.next; 1

        // reverse current group
        while (curr !== groupNext) {
            let temp = curr.next; 2
            curr.next = prev; 3
            prev = curr; 1
            curr = temp; 2
        }

        // connect previous group to current group
        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};

function getKth(curr, k) {
    while (curr && k > 0) {
        curr = curr.next;
        k -= 1;
    }

    return curr;
}