// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// Constraints:
// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

/**
 * @param {string[]} tokens
 * @return {number}
 * Time Complexity: O(n), we go through each token
 * Space Complexity: O(n), stack
 */
var evalRPN = function (tokens) {
    const operation = new Set(["+", "-", "/", "*"]);
    let stack = [];
    for (let token of tokens) {
        // if it's an operation token
        if (operation.has(token)) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            let num = 0;
            // take care of math operation
            if (token === "+") {
                num = (num1 + num2);
            } else if (token === "-") {
                num = (num1 - num2);
            } else if (token === "*") {
                num = (num1 * num2);
            } else {
                num = Math.trunc(num1 / num2);
            }
            stack.push(Number(num));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};

/**
 * @param {string[]} tokens
 * @return {number}
 * Time Complexity: O(n), we go through each token
 * Space Complexity: O(n), stack
 */
var evalRPN = function (tokens) {
    // same as above but using a lambda func
    const operations = {
        "+": ((a, b) => a + b),
        "-": ((a, b) => a - b),
        "*": ((a, b) => a * b),
        "/": ((a, b) => Math.trunc(a / b))
    }
    let stack = [];
    for (let token of tokens) {
        if (token in operations) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            const operation = operations[token];
            stack.push(Number(operation(num1, num2)));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};