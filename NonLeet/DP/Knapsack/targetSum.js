// Given a set of positive numbers (non zero) and a target sum ‘S’.
// Each number should be assigned either a ‘+’ or ‘-’ sign.
// We need to find out total ways to assign symbols to make the sum of numbers equal to target ‘S’.
const findTargetSubsets = function (num, s) {
  let totalSum = 0;
  for (let i = 0; i < num.length; i++) {
    totalSum += num[i];
    if (num[i] < 1) return -1; //invalid input, the problem expects only positive numbers
  }

  // if 's + totalSum' is odd, we can't find a subset with sum equal to '(s + totalSum) / 2'
  if (totalSum < s || (s + totalSum) % 2 == 1) return 0;

  // “Find count of subsets of the given numbers whose sum is equal to” => (S + Sum(num)) / 2
  return countSubsets(num, (s + totalSum) / 2);
};

let countSubsets = function (num, sum) {
  const n = num.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));

  // populate the sum=0 columns, as we will always have an empty set for zero sum
  for (let i = 0; i < n; i++) dp[i][0] = 1;

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = num[0] == s ? 1 : 0;
  }

  // process all subsets for all sums
  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= sum; s++) {
      // exclude the number
      dp[i][s] = dp[i - 1][s];
      // include the number, if it does not exceed the sum
      if (s >= num[i]) dp[i][s] += dp[i - 1][s - num[i]];
    }
  }

  // the bottom-right corner will have our answer.
  return dp[n - 1][sum];
};

console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`);

const findTargetSubsetsOne = function (num, s) {
  let totalSum = 0;
  for (let i = 0; i < num.length; i++) {
    totalSum += num[i];
    if (num[i] < 1) return -1; //invalid input, the problem expects only positive numbers
  }

  // if 's + totalSum' is odd, we can't find a subset with sum equal to '(s + totalSum) / 2'
  if (totalSum < s || (s + totalSum) % 2 == 1) return 0;

  return countSubsets(num, (s + totalSum) / 2);
};

let countSubsets = function (num, sum) {
  const n = num.length;
  const dp = Array(sum + 1).fill(0);
  dp[0] = 1;

  // with only one number, we can form a subset only when the required sum is equal to the number
  for (let s = 1; s <= sum; s++) {
    dp[s] = num[0] == s ? 1 : 0;
  }

  // process all subsets for all sums
  for (let i = 1; i < num.length; i++) {
    for (let s = sum; s >= 0; s--) {
      if (s >= num[i])
        dp[s] += dp[s - num[i]];
    }
  }

  return dp[sum];
};

console.log(`Count of Target sum is: ---> ${findTargetSubsetsOne([1, 1, 2, 3], 1)}`);
console.log(`Count of Target sum is: ---> ${findTargetSubsetsOne([1, 2, 7, 1], 9)}`);
