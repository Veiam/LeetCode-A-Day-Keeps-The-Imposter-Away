// Given a binary matrix representing an image, we want to flip the image horizontally, then invert it.
// To flip an image horizontally means that each row of the image is reversed. For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [1, 1, 0] results in [0, 0, 1].

function flip_and_invert_image(matrix) {
    const length = matrix[0].length - 1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j <= Math.floor(length / 2); j++) {
            // We can flip the image in place by replacing ith element from left with the ith element from the right.
            // We can take XOR of each element with 1. If it is 1 then it will become 0 and if it is 0 then it will become 1.
            [matrix[i][j], matrix[i][length - j]] = [matrix[i][length - j] ^ 1, matrix[i][j] ^ 1];
        }
    }
    return matrix
}

console.log(flip_and_invert_image([[1, 0, 1], [1, 1, 1], [0, 1, 1]]))
console.log(flip_and_invert_image([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))