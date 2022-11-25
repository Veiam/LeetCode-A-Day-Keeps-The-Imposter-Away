// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

const backspace_compare = function (str1, str2) {
    let p1 = str1.length - 1; p2 = str2.length - 1;

    while (p1 >= 0 && p2 >= 0) {
        // check for backspace
        if (str1[p1] == '#') {
            let count = 0;
            // increase increment until we reach non backspace
            while (str1[p1 - count] == '#') {
                count++;
            }
            // decrement p1 by (count * 2) since we need to account for backspace and the letter it is deleting
            p1 = p1 - (count * 2);
        }
        // check for backspace
        if (str2[p2] == '#') {
            let count = 0;
            // increase increment until we reach non backspace
            while (str2[p2 - count] == '#') {
                count++;
            }
            // decrement p1 by (count * 2) since we need to account for backspace and the letter it is deleting
            p2 = p2 - (count * 2);
        }
        // they should match now
        if (str1[p1] == str2[p2]) {
            p1--;
            p2--;
        }
        // if not they do not match
        else {
            return false;
        }
    }
    return true;
};

console.log(backspace_compare("xp#", "xyz##"));
console.log(backspace_compare("xy#z", "xyz#"));
console.log(backspace_compare("xy#z", "xyz##"));
console.log(backspace_compare("xywrrmp", "xywrrmu#p"));