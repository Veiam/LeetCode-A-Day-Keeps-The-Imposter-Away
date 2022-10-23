/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * Time: O(m*n)
 * Space: O(m+n)
 */
var multiply = function (num1, num2) {
    // Base case, if either is 0 then product is 0
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    // Get a num array and reverse it
    let first = [...num1];
    let second = [...num2];
    first.reverse();
    second.reverse();

    // Get the length of two
    const len1 = first.length;
    const len2 = second.length;

    // Initialize res array
    let res = new Array(len1 + len2).fill(0);

    // loop through
    for (let i = 0; i < len1; i++) {
        const digit = first[i];
        for (let j = 0; j < len2; j++) {
            // calculate position
            const pos = i + j;
            // get product + carry over
            const product = digit * second[j] + res[pos];
            // update current pos
            res[pos] = product % 10;
            // add carry over to the appropriate place
            res[pos + 1] += Math.floor(product / 10);
        }
    }
    // if last digit is 0 then pop it
    if (res[res.length - 1] === 0) {
        res.pop();
    }
    // reverse and return string
    return res.reverse().join("");
};