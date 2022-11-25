// Given an array of positive numbers, where each element represents the max number of jumps 
// that can be made forward from that element, write a program to find the minimum number of jumps 
// needed to reach the end of the array (starting from the first element).
// If an element is 0, then we cannot move through that element.

const countMinJumps = function (jumps) {
    function countMinJumpsRecursive(jumps, index) {
        if (index == jumps.length - 1) {
            return 0;
        }
        if (jumps[index] == 0)
            return Infinity;

        let totalJumps = Infinity;
        let start = index + 1;
        let end = index + jumps[index];
        // We will start with the '0’th index and try all options. So, if the value at the current index is ‘p’, 
        // we will try every jump in the range (1 to ‘p’) from that index.
        // After taking a jump, we recursively try all options from that index.
        while (start <= end && start < jumps.length) {
            const minJumps = countMinJumpsRecursive(jumps, start++);
            if (minJumps !== Infinity) {
                totalJumps = Math.min(totalJumps, minJumps + 1);
            }
        }
        return totalJumps;


    }
    return countMinJumpsRecursive(jumps, 0);
};

// top down
const countMinJumps = function (jumps) {
    const memoize = [];
    function countMinJumpsRecursive(jumps, index) {
        // if we have reached the last index, we don't need any more jumps
        if (index == jumps.length - 1) {
            return 0;
        }

        // If an element is 0, then we cannot move through that element
        if (jumps[index] == 0)
            return Infinity;

        // if we have already solved this problem, return the result
        if (typeof memoize[index] == 'undefined') {
            let totalJumps = Infinity;
            let start = index + 1;
            let end = index + jumps[index];

            while (start <= end && start < jumps.length) {
                // jump one step and recurse for the remaining array
                const minJumps = countMinJumpsRecursive(jumps, start++);
                if (minJumps !== Infinity) {
                    totalJumps = Math.min(totalJumps, minJumps + 1);
                }
            }
            memoize[index] = totalJumps;
        }

        return memoize[index];


    }
    return countMinJumpsRecursive(jumps, 0);
};


// bottm up
const countMinJumps = function (jumps) {
    const dp = [];
    dp[0] = 0;
    for (let i = 1; i < jumps.length; i++) {
        dp[i] = Infinity;
    }

    for (let i = 0; i < jumps.length; i++) {
        let start = i + 1;
        let end = i + jumps[i]
        while (start <= end && start < jumps.length) {
            dp[start] = Math.min(dp[i] + 1, dp[start]);
            start++;
        }
    }
    return dp[jumps.length - 1];
};



// bottm up
const countMinJumps = function (jumps) {
    const dp = Array(jumps.length).fill(0);

    // initialize with infinity, except the first index which should be zero as we start from there
    for (let i = 1; i < jumps.length; i++)
        dp[i] = Number.MAX_VALUE;

    for (let start = 0; start < jumps.length - 1; start++) {
        for (let end = start + 1; end <= start + jumps[start] && end < jumps.length; end++) {
            dp[end] = Math.min(dp[end], dp[start] + 1);
        }
    }

    return dp[jumps.length - 1];
};


console.log(`Minimum jumps needed: ---> ${countMinJumps([2, 1, 1, 1, 4])}`);
console.log(`Minimum jumps needed: ---> ${countMinJumps([1, 1, 3, 6, 9, 3, 0, 1, 3])}`);
