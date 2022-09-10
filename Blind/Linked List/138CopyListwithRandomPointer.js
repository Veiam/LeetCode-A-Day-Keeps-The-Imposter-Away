// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
// Return the head of the copied linked list.
// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Example 1:
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Example 2:
// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Example 3:
// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Constraints:
// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * Time complexity: O(n), loop thourgh linked list twice
 * Space complexity: O(n), storing linked list in map
 */
var copyRandomList = function (head) {
    const list = new Map();
    let dummy = head;

    // add a copy of node to the map
    while (dummy) {
        list.set(dummy, new Node(dummy.val, null, null));
        dummy = dummy.next;
    }

    // loop through list
    for (let [orig, copy] of list) {
        // if orig had next/random, then update the copy
        copy.next = orig.next && list.get(orig.next);
        copy.random = orig.random && list.get(orig.random);
    }

    // return from the list
    return list.get(head);
};

/**
 * @param {Node} head
 * @return {Node}
 * Time complexity: O(n), loop through linked list thrice
 * Space compelxity: O(1), in-place edit and constant space
 */
var copyRandomList = function (head) {
    let dummy = head;

    // add a clone of node next to original
    while (dummy) {
        const clone = new Node(dummy.val, null, null);
        clone.next = dummy.next;
        dummy.next = clone;
        dummy = clone.next;
    }

    dummy = head;

    // loop through and set the random of clone to random of orig next
    while (dummy) {
        dummy.next.random = dummy.random && dummy.random.next;
        dummy = dummy.next.next;
    }

    let orig = head;
    let copy = head && head.next;
    dummy = head && head.next;
    // loop through and set the next correctly
    while (orig) {
        orig.next = orig.next.next;
        // copy.next can be null
        copy.next = copy.next && copy.next.next;
        orig = orig.next;
        copy = copy.next;
    }

    return dummy;
};