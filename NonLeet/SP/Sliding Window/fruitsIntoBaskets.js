// Given an array of characters where each character represents a fruit tree,
// you are given two baskets, and your goal is to put maximum number of fruits in each basket.
// The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick one fruit from each tree until you cannot,
// i.e., you will stop when you have to pick from a third fruit type.

function fruits_into_baskets(fruits) {
    let windowStart = 0,
        maxLength = 0,
        fruitFrequency = {};

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const rightFruit = fruits[windowEnd];
        if (!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency[rightFruit] += 1;

        // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
        while (Object.keys(fruitFrequency).length > 2) {
            const leftFruit = fruits[windowStart];
            fruitFrequency[leftFruit] -= 1;
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit];
            }
            windowStart += 1; // shrink the window
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}


console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);

const fruits_into_baskets = function (fruits) {
    // counters
    let otherFruit = 0, lastFruit = 0, lastFruitStreak = 0, basketFruits = 0, max = 0;

    for (let fruit of fruits) {
        // if current fruit is in the basket, increase basket fruit count
        if (fruit == lastFruit || fruit == otherFruit)
            basketFruits++;
        // else it's a brand new fruit;
        else
            // basket now consists of last fruit streak and one new fruit
            basketFruits = lastFruitStreak + 1;

        // if current fruit is equal to last fruit, increase streak
        if (fruit == lastFruit)
            lastFruitStreak++;

        else {
            // if not, then streak is 1 since it's new fruit.
            // update the basket fruit information.
            lastFruitStreak = 1;
            otherFruit = lastFruit;
            lastFruit = fruit;
        }

        max = Math.max(max, basketFruits);
    }
    return max;
};
