/**
 * Bottom up(literally), reverse in-place
 * @param {number[][]} triangle
 * @return {number}
 * Time Complexity: O(n) where n is number of cells in the triangle. We are checking 2 cells for every cell.
 * Space Complexity: O(1) As we're overwriting the input, we don't need any collections to store our calculations.
 */
const minimumTotal = function (triangle) {
    // flip the triangle and start from the bottom instead of top
    // start from the 2nd to last, so we can set the last row to be our base case
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            // all index have two cells, need to get a min value from it
            let prev = Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
            // then add current value
            triangle[row][col] += prev;
        }
    }
    return triangle[0][0];
};

/**
 * Top down, memoization
 * @param {number[][]} triangle
 * @return {number}
 * Time Complexity: O(n) where n is number of cells in the triangle. We are checking 2 cells for every cell.
 * Space Complexity: O(n) need to store all cell results in a map.
 */
const minimumTotal = function (triangle) {
    // can be array or object
    const memoize = new Map();

    function recursive(row, col) {
        const key = `${row}:${col}`;
        // if memoized, return it
        if (memoize.has(key)) {
            return memoize.get(key);
        }

        let current = triangle[row][col];
        // get min path for the next row
        if (row < triangle.length - 1) {
            current += Math.min(recursive(row + 1, col), recursive(row + 1, col + 1));
        }

        // memoize it
        memoize.set(key, current);
        return current;
    }

    return recursive(0, 0);
};