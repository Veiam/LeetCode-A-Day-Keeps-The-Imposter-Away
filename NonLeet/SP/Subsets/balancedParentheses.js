// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.
function generate_valid_parentheses(nums) {
    // calculate the valid length
    let validLength = nums * 2,
        combination = [],
        result = new Set();
    combination.push('()');
    for (let i = 1; i < nums; i++) {
        const length = combination.length;
        for (let j = 0; j < length; j++) {
            const current = combination.shift();
            // create a new set by inserting a parenthesis pair
            for (let k = 0; k < current.length; k++) {
                // split it into an char array
                const set = current.split('');
                set.splice(k, 0, '(');
                set.splice(k + 1, 0, ')');
                // if the length matches the valid length
                // add to the set
                if (set.length == validLength) {
                    result.add(set.join(''));
                }
                else {
                    combination.push(set.join(''));
                }
            }
        }
    }

    return result;
}


console.log(`All combinations of balanced parentheses are:`)
let result = generate_valid_parentheses(2);
result.forEach((permutation) => {
    console.log(permutation);
});
console.log(`All combinations of balanced parentheses are:`)
result = generate_valid_parentheses(3);
result.forEach((permutation) => {
    console.log(permutation);
});

function generate_valid_parentheses(num) {
    result = [];
    const parenthesesString = Array(2 * num);
    generate_valid_parentheses_rec(num, 0, 0, parenthesesString, 0, result);
    return result;
}


function generate_valid_parentheses_rec(num, openCount, closeCount, parenthesesString, index, result) {
    // if we've reached the maximum number of open and close parentheses, add to the result
    if (openCount === num && closeCount === num) {
        result.push(parenthesesString.join(''));
    } else {
        if (openCount < num) { // if we can add an open parentheses, add it
            parenthesesString[index] = '(';
            generate_valid_parentheses_rec(num, openCount + 1, closeCount, parenthesesString, index + 1, result);
        }
        if (openCount > closeCount) { // if we can add a close parentheses, add it
            parenthesesString[index] = ')';
            generate_valid_parentheses_rec(num, openCount, closeCount + 1, parenthesesString, index + 1, result);
        }
    }
}

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`);
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`);