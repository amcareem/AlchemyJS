/* When the values are different types, the === operator will always evaluate to false.
However, the loose equals == comparison operator will attempt type conversion to compare values.

Many discourage the use of == in general.
For one thing it is less performant because it requires changing a value's type.
Additionally, it can lead to confusing results in some cases where type conversion is unexpected. */

// Return true if a and b are loosely equal to each other. 
// If not, return false.

function looseEquals(a, b) {
    if(a==b)
    return true;
    return false;
}

module.exports = looseEquals;