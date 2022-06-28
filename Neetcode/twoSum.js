/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Space Complexity: O(n)
 * Time Complexity: O(n)
 */
 var twoSum = function(nums, target) {
    const map = {};
    
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const pair = target - num;
        if(pair in map){
            return [map[pair], i];
        }
        map[num] = i;
    }
};