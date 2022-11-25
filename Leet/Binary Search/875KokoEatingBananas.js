// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// Constraints:
// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * Time complexity: O(nlogm), binary search then loop through
 * Space complexity: O(1), constant space
 */
var minEatingSpeed = function (piles, h) {
    // search range
    let left = 1, right = Math.max(...piles);

    // Binary search
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        let count = 0;
        // loop and find how manay hours it needs
        // alternatively, we can sort piles and exit out early
        for (let i = 0; i < piles.length; i++) {
            let pile = piles[i];
            count += Math.ceil(pile / mid);
        }
        if (count > h) {
            left = mid + 1;
        }
        // in here we do right = mid instead of right = mid -1 since right can be the minimum
        else if (count <= h) {
            right = mid;
        }
    }

    return right;
};