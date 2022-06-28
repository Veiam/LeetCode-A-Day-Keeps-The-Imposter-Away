/**
 * @param {number[]} nums
 * @return {boolean}
 * Time/Space: O(n)
 */
 var containsDuplicate = function(nums) {
    const arr = new Set();
    for(let num of nums){
        if(arr.has(num)){
            return true;
        }
        arr.add(num);
    }
    return false;
};