function power(num, powr) {
    if (powr == 0) {
        return 1;
    }
    else {
        return num * power(num, powr - 1);
    }
}

function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return num * factorial(num - 1);
    }
}
