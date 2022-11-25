//Euclid's algorithm Exact and Deterministic Algorithm
function gcd(a, b) {
    while (b != 0) {
        t = a;
        a = b;
        b = t % b;
    }
    return a;
}
