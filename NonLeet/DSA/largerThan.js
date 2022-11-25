// Write a function, larger_than which retursn True if the first number is larger than the second one.
// Conditions: Non-negative and no parseint/number.

function largerThan(first, second) {
    if( first == second) {
        return false;
    }
    else {
        const fLen = first.length;
        const sLen = second.length;

        if( fLen > sLen ) {
            return true;
        }
        else if( fLen < sLen ){
            return false;
        }
        else{
            let i =0, len = fLen;
            while( i < len ){
                if( first.charAt(i) > second.charAt()) {
                    return true;
                }
                i++;
            }
        }
    
        return false;
    }
}
