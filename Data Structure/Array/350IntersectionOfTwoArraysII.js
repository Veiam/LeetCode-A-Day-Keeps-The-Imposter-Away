// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

/**
 * Intersection here does not mean matching elements in order.
 * It just means matching element and they do not need to be in order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Time Complexity O(m + n), where m is nums1 length and n is nums 2 length
 * Space Complexity O(n), where n is nums 2 length
 */
const intersect = function (nums1, nums2) {
    const map = {};

    // store nums2 in map
    nums2.forEach((num) => {
        // if it doesn't exist, create it
        if (!(num in map)) {
            map[num] = 0;
        }
        // increase occurence
        map[num]++;
    })

    let k = 0;

    nums1.forEach((num) => {
        if (num in map) {
            // if found, inplace replace nums1 with current num
            nums1[k++] = num;
            // decrease the occurence and if occurence is 0
            // then delete it
            map[num]--;
            if (map[num] === 0) {
                delete map[num];
            }
        }
    })

    return nums1.slice(0, k);
};

/**
 * If nums are sorted and nums1 can have less elements than nums2
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Time Complexity O(m + n), where m is nums1 length and n is nums 2 length
 * Space Complexity O(1), constance space is used
 */
const intersect = function (nums1, nums2) {
    let p1 = 0, p2 = 0, count = 0;

    while (p1 < nums1.length && p2 < nums2.length) {
        // increase p1 if p1 is smaller
        if (nums1[p1] < nums2[p2]) {
            p1++;
        }
        // increase p2 if p2 is smallerF
        else if (nums1[p1] > nums2[p2]) {
            p2++;
        }
        // increase both if match is found and increase count
        else {
            nums1[count++] = nums1[p1++];
            p2++;
        }
    }

    return nums1.slice(0, count);
};

