// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and newColor.
// You should perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill, consider the starting pixel,
// plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.
// Replace the color of all of the aforementioned pixels with newColor.
// Return the modified image after performing the flood fill.

// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel),
// all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
// Output: [[2,2,2],[2,2,2]]

// Constraints:
// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], newColor < 216
// 0 <= sr < m
// 0 <= sc < n

/**
 * DFS
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}cod
 */
const floodFill = function (image, sr, sc, newColor) {
    // recursive
    function depthFirstSearch(x, y, color) {
        // check if the current position matches the color given
        if (image[x][y] === color) {
            // if so set the current position to the newColor
            image[x][y] = newColor;
            // up
            if (x >= 1)
                depthFirstSearch(x - 1, y, color);
            // down
            if (x + 1 < image.length)
                depthFirstSearch(x + 1, y, color);
            // left
            if (y >= 1)
                depthFirstSearch(x, y - 1, color);
            // right
            if (y + 1 < image[0].length)
                depthFirstSearch(x, y + 1, color);
        }
    }

    // get the first color
    const color = image[sr][sc];

    // if color does not match the new color
    // call depthFirstSearch
    if (color !== newColor) {
        depthFirstSearch(sr, sc, color);
    }

    return image;
};


/**
 * BFS
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}cod
 */
const floodFill = function (image, sr, sc, newColor) {
    // get the first color
    const color = image[sr][sc];

    // if color does not match the new color
    if (color !== newColor) {
        // set up a queue with initial
        const queue = [[sr, sc]];
        // as long as queue.length is not 0
        while (queue.length) {
            // get the first index
            const [x, y] = queue.shift();
            // if it matches the color
            if (image[x][y] === color) {
                // update the color
                image[x][y] = newColor;
                // up
                if (x - 1 >= 0)
                    queue.push([x - 1, y]);
                // down
                if (x + 1 < image.length)
                    queue.push([x + 1, y])
                // left
                if (y - 1 >= 0)
                    queue.push([x, y - 1]);
                // right
                if (y + 1 < image[0].length)
                    queue.push([x, y + 1]);
            }
        }
    }

    return image;
};

