// Given a string, find all of its permutations preserving the character sequence but changing case.
const find_letter_case_string_permutations = function (str) {
    const permutations = [];
    permutations.push(str);
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() !== str[i].toUpperCase()) {
            const length = permutations.length;
            for (let j = 0; j < length; j++) {
                const chs = permutations[j].split(''); // string to array
                // if the current character is in upper case, change it to lower case or vice versa
                if (chs[i] === chs[i].toLowerCase()) {
                    chs[i] = chs[i].toUpperCase();
                } else {
                    chs[i] = chs[i].toLowerCase();
                }
                permutations.push(chs.join(''));
            }
        }
    }
    return permutations;
};


console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)
