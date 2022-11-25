// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

/**
 * BFS
 * @param {number[][]} grid
 * @return {number}
 * Time and Space: O(N), where N is the size of grid. BFS with queue.
 */
var orangesRotting = function (grid) {
    const searchGrid = (grid, orangeCount = 0, queue = []) => {
        const [rows, cols] = [grid.length, grid[0].length];

        // loop through grid
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // see if current cell is not blank
                const isEmpty = grid[row][col] === 0;

                // if it's not increase the orange count
                if (!isEmpty)
                    orangeCount++;

                // see if it is rotten
                const isRotten = grid[row][col] === 2;
                // if not add to the queue
                if (isRotten)
                    queue.push([row, col]);
            }
        }

        return { queue, orangeCount }
    }

    const bfs = (grid, queue, rottenCount = 0, minutes = 0) => {
        while (queue.length) {
            // keep track of how many oranges are rotten
            rottenCount += queue.length;


            for (let i = (queue.length - 1); 0 <= i; i--) {
                expireFresh(grid, queue);
            }

            // if there are new oranges, increase a minute
            if (queue.length)
                minutes++;
        }

        return { rottenCount, minutes };
    }

    var expireFresh = (grid, queue) => {
        const [rows, cols] = [grid.length, grid[0].length];
        const [row, col] = queue.shift();

        // loop through its neighbors
        for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
            const isFresh = grid[_row][_col] === 1;
            if (!isFresh)
                continue;
            // rot it
            grid[_row][_col] = 2;
            // add it to the queue
            queue.push([_row, _col]);
        }
    }

    // get neighbors in 4 direciton
    var getNeighbors = (row, rows, col, cols) => [[0, 1], [0, -1], [1, 0], [-1, 0]]
        .map(([_row, _col]) => [(row + _row), (col + _col)])
        .filter(([_row, _col]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols));

    const { queue, orangeCount } = searchGrid(grid);
    const { rottenCount, minutes } = bfs(grid, queue);

    const isEqual = orangeCount === rottenCount;
    return isEqual ? minutes : -1;
};

/**
 * In-place BFS
 * @param {number[][]} grid
 * @return {number}
 * Time: O(N^2), where N is size of grid, in each round of BFS, we have to iterate through entire grid
 * Space: O(1), in place
 */
var orangesRotting = function (grid, minutes = 2) {
    var expireFresh = (grid, minutes, toBeContinued = false) => {
        const [rows, cols] = [grid.length, grid[0].length];

        // loop through
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // see if it's time for this to be rot
                const isEqual = grid[row][col] === minutes;
                if (!isEqual)
                    continue;

                // loop trough its neighbors and update timestamp
                for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
                    const isFresh = grid[_row][_col] === 1;
                    if (!isFresh)
                        continue;

                    grid[_row][_col] = (minutes + 1);
                    toBeContinued = true;
                }
            }
        }

        return toBeContinued;
    }

    var getNeighbors = (row, rows, col, cols) => [[0, 1], [0, -1], [1, 0], [-1, 0]]
        .map(([_row, _col]) => [(row + _row), (col + _col)])
        .filter(([_row, _col]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols));

    // check if there are any remaining fresh oranges
    const hasFresh = (grid) => {
        for (const row of grid) {
            for (const cell of row) {
                const isFresh = cell === 1;
                if (isFresh)
                    return true;
            }
        }

        return false;
    }

    while (expireFresh(grid, minutes))
        minutes++;

    return !hasFresh(grid) ? (minutes - 2) : -1;
}


