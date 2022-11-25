// Any number will be called a happy number if, after repeatedly replacing it with
// a number equal to the sum of the square of all of its digits, leads us to number ‘1’.
// All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function (num) {
    let fastNum = num;
    let slowNum = num;

    // check if we found happy number
    while (fastNum != 1 && getSquare(fastNum) != 1) {
        fastNum = getSquare(getSquare(fastNum));
        slowNum = getSquare(slowNum);

        // if they meet then we are not happy
        if (fastNum == slowNum) {
            return false;
        }
    }
    return true;
};

function getSquare(num) {
    let firstDigit = num % 10;
    let secondDigit = Math.floor(num / 10)
    firstDigit = firstDigit * firstDigit;
    secondDigit = secondDigit * secondDigit;
    return firstDigit + secondDigit;
}

console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)
