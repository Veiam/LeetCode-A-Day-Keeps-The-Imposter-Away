// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

// Example 1:
// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Example 2:
// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

// Constraints:
// 1 <= hand.length <= 104
// 0 <= hand[i] <= 109
// 1 <= groupSize <= hand.length
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 * Time: O(n*m)
 * Space: O(n)
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    // build a sorted freq map
    const freqMap = new Map();
    // O(logn)
    hand.sort((a, b) => a - b);
    // O(n)
    hand.forEach((a) => freqMap.set(a, freqMap.get(a) == null ? 1 : freqMap.get(a) + 1));

    // O(n)
    // loop through map enttries
    for (const [key, value] of freqMap.entries()) {
        // O(m)
        // see if we can get a new group
        for (let j = 0; j < value; j++) {
            for (let i = key; i < groupSize + parseInt(key); i++) {
                if (freqMap.get(i) != null) {
                    freqMap.set(i, freqMap.get(i) - 1);
                    if (freqMap.get(i) === 0) {
                        freqMap.delete(i);
                    }
                }
                else {
                    return false;
                }
            }
        }

    }

    return true;
};