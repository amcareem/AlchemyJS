//! operator, commonly referred to as the NOT or negation operator.

/* If you apply the negation operator to a truthy or falsey value twice,
you'll wind up with the corresponding boolean value.
Since 2 is a truthy value, !!2 will evaluate to true. */

/* Trouble is, there's only room for 1 car to cross the bridge at a time.
This means that if both cars were to be crossing at the same time, neither would be able to cross. */

/* Complete the carCrossing function to return true if and only if one car is crossing.
he logical term for this situation is an "Exclusive OR".
 It is only true if exactly 1 of the terms are true. */

function carCrossing(aCrossing, bCrossing) {
    if((!aCrossing && bCrossing)||(aCrossing && !bCrossing))
    return true;
    else
    return false
}

module.exports = carCrossing;