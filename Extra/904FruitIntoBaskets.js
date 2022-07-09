// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

// Example 2:
// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

// Example 3:
// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].
 

// Constraints:
// 1 <= fruits.length <= 105
// 0 <= fruits[i] < fruits.length

/**
 * @param {number[]} fruits
 * @return {number}
 * Time Complexity: O(n), we loop through each tree once
 * Space Complexity: O(1), constant space regardless of the length of fruits.
 */
 var totalFruit = function(fruits) {
    let res = 0, cur = 0, fruitInARow = 0, b1 = 0, b2 = 0;
    for(let fruit of fruits){
        // if the fruit is in basket, then increase current count
        if(fruit === b1 || fruit === b2){
            cur++;
        }
        // if not, current will be count of fruits that were stored in basket b in a row + 1
        else {
            cur = fruitInARow + 1;
        }
        
        // if fruit is in basket2, increase the fruitInARow count
        if(fruit === b2){
            fruitInARow++;
        }
        // else fruitInARow will be 1
        else{
            fruitInARow = 1;
        }
        
        // if fruit does not match basket2
        if(fruit !== b2){
            // move fruit from basket 2 to basket1
            b1 = b2;
            // move new fruit to basket 2;
            b2 = fruit;
        }
        
        res = Math.max(res,cur);
    }
    return res;
};