// Write a function, second_largest(given_list), which takes the list as the input, and returns the second largest number.

function second_largest(given_list) {
    if(given_list.length < 2)
        return "None";
    else {
        given_list.sort().reverse();
        return given_list[1];
    }
}
