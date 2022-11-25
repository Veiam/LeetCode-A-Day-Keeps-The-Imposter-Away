// Given a number array to represent possible ribbon lengths and a total ribbon length ‘n,’
// we need to find the maximum number of pieces that the ribbon can be cut into.

let countRibbonPieces = function (ribbonLengths, total) {
  function countRibbonPieces(ribbonLengths, total, index) {
    if (total == 0) {
      return 0;
    }
    if (ribbonLengths.length == 0 || index >= ribbonLengths.length) {
      return -Infinity;
    }
    let count1 = -Infinity;
    if (ribbonLengths[index] <= total) {
      // create a new set which includes one quantity of length 'l' if it does not exceed 'n', and 
      // recursively call to process all lengths 
      let temp = countRibbonPieces(ribbonLengths, total - ribbonLengths[index], index);
      if (temp != -Infinity) {
        count1 = temp + 1;
      }
    }
    // create a new set without length 'l', and recursively call to process the remaining lengths
    // return the number of pieces from the above two sets with a higher number of pieces
    const count2 = countRibbonPieces(ribbonLengths, total, index + 1);

    return Math.max(count1, count2);
  }
  let result = countRibbonPieces(ribbonLengths, total, 0);
  return result == -Infinity ? -1 : result;
};

let countRibbonPieces = function (ribbonLengths, total) {
  const n = ribbonLengths.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(total + 1).fill(0));

  for (let i = 0; i < n; i++)
    for (let j = 0; j <= total; j++)
      dp[i][j] = Number.MIN_VALUE;

  // populate the total=0 columns, as we don't need any ribbon to make zero total
  for (let i = 0; i < n; i++) dp[i][0] = 0;

  for (let i = 0; i < n; i++) {
    for (let t = 1; t <= total; t++) {
      if (i > 0) {
        // exclude the ribbon
        dp[i][t] = dp[i - 1][t];
      }
      // include the ribbon and check if the remaining length can be cut into available lenghts
      if (t >= ribbonLengths[i] && dp[i][t - ribbonLengths[i]] != Number.MIN_VALUE) {
        dp[i][t] = Math.max(dp[i][t], dp[i][t - ribbonLengths[i]] + 1);
      }
    }
  }

  // total combinations will be at the bottom-right corner, return '-1' if cutting is not possible
  return dp[n - 1][total] == Number.MIN_VALUE ? -1 : dp[n - 1][total];
};
