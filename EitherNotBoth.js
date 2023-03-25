/* Write a function eitherNotBoth that takes in a number and returns true if the the number is divisible by either 3 or 5,
but not both.Return false otherwise. */


/* The function checks if the number is divisible by both 3 and 5, and if it is, returns false.
If the number is divisible by either 3 or 5, the function returns true.
If the number is not divisible by either 3 or 5, the function returns false.
The function is exported using module.exports to allow other JavaScript files to import and use it. */

function eitherNotBoth(num) {
    if(num%3===0 && num%5===0)
    return false;
    else if(num%3===0|| num%5===0)
    {
        return true;
    }
    return false;
}

module.exports = eitherNotBoth;
